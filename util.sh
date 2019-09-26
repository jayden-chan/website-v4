#!/bin/zsh

max_pages=2

set -e

case $1 in
    resume)
        npx webpack --progress --env=resume
        wkhtmltopdf -L 0 -R 0 -T 0 -B 0 -s Letter build/resume/index.html build/temp.pdf
        pdftk build/temp.pdf cat 1-r$max_pages output build/resume.pdf
        rm build/temp.pdf
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
        mv ../build ./docs
        ;;
    *)
        echo "invalid command"
esac
