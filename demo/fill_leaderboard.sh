#! /bin/bash

curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"John\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Jack\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Robert\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Jerry\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Alice\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Bob\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Rayan\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Jessy\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Rosa\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/
curl -H 'Content-Type: application/json' --request POST --data "{\"pseudo\":\"Penny\", \"email\":\"test@gmail.com\"}" http://localhost:8000/leaderboard/players/



for run in {1..100}
do

    score1=$(( ( RANDOM % 100 )  + 1 ))
    score2=$(( ( RANDOM % 100 )  + 1 ))
    score3=$(( ( RANDOM % 100 )  + 1 ))
    score4=$(( ( RANDOM % 100 )  + 1 ))
    player=$(( ( RANDOM % 10  )  + 1 ))

    curl -H 'Content-Type: application/json' --request POST --data "{\"date\":\"2019-10-10\",\"stage1Score\":$score1,\"stage2Score\":$score2,\"stage3Score\":$score3,\"stage4Score\":$score4,\"player\":$player}" http://localhost:8000/leaderboard/gameresults/

    sleep 1
done
