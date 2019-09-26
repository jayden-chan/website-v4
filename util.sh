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
        if [[ "$2" == "" ]]; then
            echo "must specify a major/minor/patch version"
            echo "./util.sh deploy patch"
            exit 1
        fi

        npm run build
        npm run clean-css
        ls -lAh build
        mv build ..
        git checkout master
        rm -rf docs
        mv ../build ./docs
        git add --all
        git commit -m "JC: Deploy"
        npm version $2
        git push
        git push --tags
        ;;
    *)
        echo "invalid command"
esac
