#!/bin/bash


$(npm bin)/set-up-ssh --key "$encrypted_4cd64f0ee7de_key" \
                        --iv "$encrypted_4cd64f0ee7de_iv" \
                        --path-encrypted-key ".travis/github_deploy_key.enc"

./node_modules/.bin/gh-pages -d build/ -b gh-pages -r git@github.com:${TRAVIS_REPO_SLUG}.git
