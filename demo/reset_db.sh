#! /bin/bash

rm ../db.sqlite3

../manage.py migrate

../manage.py createsuperuser
