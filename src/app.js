//node code module
const path = require('path');

//npm module
const express = require('express');
const hbs = require('hbs');

//custom modules
const goeCodeUtil = require('./utils/geocode');
const weatherUtil = require('./utils/weatherUtil');

//create application
const app = express();

//grab the public directory  & view directory & partials
const publicDirectory = path.join(__dirname, '../public');
const customViewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


//make sure express uses hbs for template engine
app.set('view engine', 'hbs');
//set the views to the custom path
app.set('views', customViewsPath);

//register partial path
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory))


// plain way to route
// app.get('/', (req, resp) => {
//     resp.send('<h1>hello express!!</h1>')
// })

//using template enginer - hbs view
app.get('/', (req, resp) => {
    resp.render('index', {
        title: 'Weather',
        createdBy: 'Saravanan Shanmugam'
    });
})

app.get('/about', (req, resp) => {
    resp.render('about', {
        title: 'About Page',
        createdBy: 'Saravanan Shanmugam'
    });
})

app.get('/help', (req, resp) => {
    resp.render('help', {
        title: 'Help Page',
        message: 'Do you need any message',
        createdBy: 'Saravanan Shanmugam'
    });
})

// app.get('/help',(req,resp) =>{
//     resp.send('Help');
// })

// app.get('/about',(req,resp) =>{
//     resp.send('about title');
// })

app.get('/weather', (req, resp) => {
    //static json
    //resp.send({location:'Coral Springs',Forecast:'Sunny'});

    //query string challenge
    if ((req.query.address === undefined) || (req.query.address === '')) return resp.send({ error: { code: 100, message: 'No Address?' } });
    //  resp.send({forecast:{condition:'Sunny',location:req.query.address}})

    //callback pattern to get the deocode and pass the destructured data in call back 
    goeCodeUtil.getGEOCode(req.query.address, (error, { latitude, longitude, CityName }= {}) => {
        if (error) {
            return { error: { code: 101, message: error } }
        }

        //call weather util and pass a callback to resp.send..
        weatherUtil.getWeather(latitude, longitude, CityName, (weatherJson) => {
            resp.send(weatherJson);
        })
    })
})

//for 404 error for help 
app.get('/help/*', (req, resp) => {
    resp.render('error', {
        title: 'Help Error Page',
        message: '404 - help article Not Found',
        createdBy: 'Saravanan Shanmugam'
    })
})

//for 404 error - generic 
app.get('*', (req, resp) => {
    resp.render('error', {
        title: 'Generic Error Page',
        message: '404 - Page Not Found',
        createdBy: 'Saravanan Shanmugam'
    })
})

app.listen(3000, () => {
    console.log('serving on the port ' + 3000)
});