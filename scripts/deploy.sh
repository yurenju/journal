#!/bin/bash

openssl aes-256-cbc -K $encrypted_4cd64f0ee7de_key -iv $encrypted_4cd64f0ee7de_iv -in .travis/github_deploy_key.enc -out .travis/github_deploy_key -d
chmod 600 .travis/github_deploy_key
ssh-add .travis/github_deploy_key

./node_modules/.bin/gh-pages -d build/ -b gh-pages -r git@github.com:${TRAVIS_REPO_SLUG}.git
