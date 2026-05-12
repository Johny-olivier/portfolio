#!/bin/bash
TOKEN=$(cat /home/johny-olivier/token_github.txt)
git remote set-url origin "https://Johny-olivier:${TOKEN}@github.com/Johny-olivier/portfolio.git"
git push -u origin main
