#!/bin/zsh

source ~/.zshrc
nvm use 18.16.0

rm -rf node_modules

npm install
# npm run build
