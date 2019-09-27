@echo off
#!/bin/sh
ssh root@167.71.251.28 <<EOF
 cd ~/nodeJs-weather-website
 git pull
 npm install — production
 pm2 restart all
 exit
EOF