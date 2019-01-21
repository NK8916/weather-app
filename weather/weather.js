const request = require("request");

var getWeather = (lat,long,callback) =>{
    console.log(`${lat},${long}`);
    request(
        {
            url: `https://api.darksky.net/forecast/35f063dfc802c67fbc1b64bed5124ca0/${lat},${long}`,
            json: true
        }, (error, response, body) => {

            if (!error && response.statusCode === 200) {
                callback(undefined,{
                    temperature:body.currently.temperature,
                    apparentTemperature:body.currently.apparentTemperature
                });
    
            }
    
            else {
                console.log(error);
                console.log(response.statusCode);
                console.log("Unable to connect");
            }
        });
}


module.exports.getWeather=getWeather;