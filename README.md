# Cyberstories
This is a serious game in virtual reality about cybersecurity.
This repository holds the website of the game.

Current deployment url : https://cyberstories.herokuapp.com

# How to launch this project in developement ?
## Prerequisites
- A linux distribution (such as Ubuntu)
- python 3.6
- virtualenv (https://virtualenv.pypa.io/en/stable/)
## Launch this project
### Compile React
`
cd frontend
npm install
npm run watch
`
This will compile the React code into a bundle, and watch any changes to recompile when needed. 
### Setup Redis
`
./redis.sh
`
### Launch Django server
`
virtualenv -p python3.6 env
source env/bin/activate
python3.6 manage.py makemigrations
python3.6 manage.py migrate
python3.6 manage.py runserver
`
The go to http://localhost:8000 to see the website.

# Licence
Epita

# Authors
Emmanuel Meric de Bellefon
Axel Vigny
Laxman Thayalan
Maxime Lacombe

Epita, MTI, promo 2020