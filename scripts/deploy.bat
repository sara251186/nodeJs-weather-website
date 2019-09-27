@echo off
cd "c:\Users\saravanan\nodeServer"
echo "********creating the production environment........."
mkdir Production
cd production
echo "********cloning the repository......................."
git clone "https://github.com/sara251186/nodeJs-weather-website.git"
cd nodeJs-weather-website
echo "********Pre Installing the dependent node modules & build & test and execute start to run the application......................."
npm install && npm test && npm start
echo "********Application Deployed and running.........................................."
EOF