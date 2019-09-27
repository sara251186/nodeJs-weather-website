@echo off
cd
chdir /D "%USERPROFILE%"
mkdir Production
cd production
cd
git clone "https://github.com/sara251186/nodeJs-weather-website.git"
cd nodeJs-weather-website
cd
npm install
EOF