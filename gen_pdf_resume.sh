#!/bin/zsh

npm run build
wkhtmltopdf -L 0 -R 0 -T 0 -B 0 -s Letter build/resume/index.html build/temp.pdf
pdftk build/temp.pdf cat 1 output build/resume.pdf
rm build/temp.pdf
