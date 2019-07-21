#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd public/.vuepress/dist

# if you are deploying to a custom domain
echo 'docs.yunload.org' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:YunLoad/Docs.git master

cd -
