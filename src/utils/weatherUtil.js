const request = require('request');

const getWeather = (latitude,longitude,CityName,callback) => {

    const url = 'https://api.darksky.net/forecast/f930acddb49f8d67c0e87e88627834d5/'+ latitude +',' + longitude + '?exclude=minutely,hourly&lang=en&units=si';

    request({ url, json: true }, (error, data) => {
        if (error) {
            callback ({error:{code:300,errormessage: error}})
        } else if (data.error) {
            callback ({error:{code:200,errormessage: body.error}})
        }
        else {
            const {currently:currentWeather} = data.body
                callback({cityName:CityName,temperature:currentWeather.temperature,summary:currentWeather.summary})         
        }
    })

}

module.exports = {
    getWeather: getWeather
}
