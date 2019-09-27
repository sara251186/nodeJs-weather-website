@echo off
cd "c:\Users\saravanan"
mkdir Production
cd production
git clone "https://github.com/sara251186/nodeJs-weather-website.git"
cd nodeJs-weather-website
npm install
npm test
npm start
EOF