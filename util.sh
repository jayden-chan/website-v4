#!/bin/zsh

max_pages=2

set -e

case $1 in
    resume)
        npx webpack --progress --env=resume
        wkhtmltopdf -L 0 -R 0 -T 0 -B 0 -s Letter build/resume/index.html build/temp_resume.pdf
        pdftk build/temp_resume.pdf cat 1-r$max_pages output build/resume.pdf
        wkhtmltopdf -L 0 -R 0 -T 0 -B 0 -s Letter build/coverletter/index.html build/temp_cover.pdf
        pdftk build/temp_cover.pdf cat 1-r$max_pages output build/coverletter.pdf
        pdftk build/coverletter.pdf build/resume.pdf cat output build/combined.pdf
        rm build/temp_resume.pdf build/temp_cover.pdf
        ;;
    deploy-surge)
        npm run build
        npm run clean-css
        ls -lAh build
        npm run deploy-surge
        ;;

    deploy)
        npm run build
        npm run clean-css
        ls -lAh build
        mv build ..
        git checkout master
        git pull
        rm -rf docs
        mv ../build ./docs
        git add --all
        git commit -m "JC: Deploy"
        git push
        ;;
    *)
        echo "invalid command"
esac
