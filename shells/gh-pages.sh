cd dist/qiankun-playground

git init 
git config --local user.name "gausszhou"
git config --local user.email gausszhou@qq.com
git add .
time=$(date "+%Y-%m-%d %H:%m")
git commit -m "$time deploy"
git checkout -b gh-pages

git push  git@github.com:gausszhou/qiankun-playground.git gh-pages -f