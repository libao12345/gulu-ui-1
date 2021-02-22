rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:libao12345/gulu-ui-site.git
git push -f -u origin main &&
cd -
echo https://libao12345.github.io/gulu-ui-site/index.html