#!/bin/zsh

case $1 in
    resume)
        npm run build
        wkhtmltopdf -L 0 -R 0 -T 0 -B 0 -s Letter build/resume/index.html build/temp.pdf
        pdftk build/temp.pdf cat 1 output build/resume.pdf
        rm build/temp.pdf
        ;;
    deploy)
        npm run build
        npm run clean-css
        ls -lAh build
        npm run deploy
        ;;
    *)
        echo "invalid command"
esac
