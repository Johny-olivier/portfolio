import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/chat.js';

function responseRecorder() {
  return {
    headers: {}, code: 200, body: undefined,
    setHeader(key, value) { this.headers[key] = value; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; },
  };
}
function fakeCredentials(t, value = 'test-only-placeholder') {
  const previous = process.env.GEMINI_API_KEY;
  if (value) process.env.GEMINI_API_KEY = value;
  else delete process.env.GEMINI_API_KEY;
  t.after(() => { if (previous === undefined) delete process.env.GEMINI_API_KEY; else process.env.GEMINI_API_KEY = previous; });
}
const ask = async body => {
  const res = responseRecorder(); await handler({ method: 'POST', body }, res); return res;
};
const valid = { in_scope: true, title: 'Schedule Handler', paragraphs: ['Une application de gestion d’emploi du temps avec PHP et MySQL.'], sources: ['schedule-handler'] };
const upstream = answer => new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify(answer) }] } }] }));

test('Gemini : rejette les méthodes et les questions invalides', async () => {
  const res = responseRecorder(); await handler({ method: 'GET' }, res); assert.equal(res.code, 405);
  for (const body of [undefined, {}, {question: 2}, {question: ''}, {question: 'a'.repeat(501)}]) {
    assert.equal((await ask(body)).code, 400);
  }
});
test('Gemini : absence de configuration sans fuite de détail', async t => {
  fakeCredentials(t, null);
  const res = await ask({ question: 'Son parcours ?' });
  assert.equal(res.code, 503); assert.equal(res.body.error, 'ai_not_configured');
});
test('Gemini : nouvelles sources et instructions séparées de la question', async t => {
  fakeCredentials(t);
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.ok(!url.includes('?key='));
    const payload = JSON.parse(options.body);
    assert.match(payload.systemInstruction.parts[0].text, /schedule-handler/);
    assert.match(payload.systemInstruction.parts[0].text, /mini-framework-java/);
    assert.equal(payload.contents.length, 1);
    assert.equal(payload.contents[0].parts[0].text, 'Parle-moi de Schedule Handler');
    assert.equal(payload.generationConfig.responseMimeType, 'application/json');
    return upstream(valid);
  });
  const res = await ask({question: 'Parle-moi de Schedule Handler'});
  assert.equal(res.code, 200); assert.equal(res.headers['Cache-Control'], 'no-store');
  assert.deepEqual(res.body.sources, ['schedule-handler']);
});
test('Gemini : les citations inconnues sont remplacées par le refus documenté', async t => {
  fakeCredentials(t);
  t.mock.method(globalThis, 'fetch', async () => upstream({...valid, sources:['not-a-project']}));
  assert.deepEqual((await ask({question:'Un projet ?'})).body.sources, ['profil']);
});
test('Gemini : panne et réponse non JSON activent le secours côté page', async t => {
  fakeCredentials(t);
  const mock = t.mock.method(globalThis, 'fetch', async () => new Response('', { status: 429 }));
  assert.equal((await ask({question:'Ses compétences ?'})).code, 503);
  mock.mock.mockImplementation(async () => new Response('not-json'));
  assert.equal((await ask({question:'Ses compétences ?'})).code, 503);
});
test('Gemini : réponse HTML refusée et pensées exclues du contenu', async t => {
  fakeCredentials(t);
  t.mock.method(globalThis, 'fetch', async () => new Response(JSON.stringify({candidates:[{content:{parts:[{thought:true,text:'internal reasoning'}, {text:JSON.stringify({...valid,paragraphs:['<script>alert(1)</script>']})}]}}]})));
  assert.deepEqual((await ask({question:'Schedule Handler ?'})).body.sources, ['profil']);
});
