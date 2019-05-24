#! /bin/bash

coverage run --source=$(ls -dm */ | tr -d ' /\n') --omit=env*,*migrations* manage.py test

if [ "$1" != "review" ]; then
    coverage report -m
    echo ""
    echo "Use \`$0 review\` to open a review in your browser."
else
    coverage html
    xdg-open htmlcov/index.html 
fi
