const request = require('request');

const getGEOCode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g'

    //make a call to get the lat and long
    request({ url, json: true }, (error, {body}) => { //instead of passing resonse obj, we can destructure and pass the body 
        if (error) {
            callback(error, undefined);
        } else if (body.message) {
            callback(body.message, undefined);
        } else {
            const geoObj = {
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                CityName:body.features[0].place_name
            } 

           
            callback(undefined, geoObj);
        }
    })
}

module.exports = {
    getGEOCode: getGEOCode
}