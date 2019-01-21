
const yargs = require("yargs");
const weather = require("./weather/weather");
const geocode=require("./geocode/geolocate");


const argv=yargs
.options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address To Fetch Weather',
        string:true
    }
})
.help()
.alias('help','h')
.argv;

geocode.geoAddress(argv.address,(errorMess,results) => {
    if(errorMess){
        console.log(errorMess);
    }
    else{
        console.log(JSON.stringify(results.Address,undefined,2));
        console.log(JSON.stringify(results,undefined,2));
        weather.getWeather(results.latitude,results.longitude,(errorMess,weatherResults) => {
            if(errorMess){
                        console.log(errorMess);
                    }
                    else{
                        console.log(JSON.stringify(weatherResults,undefined,2));
                        console.log(`Temperature is ${weatherResults.temperature},And it feels like ${weatherResults.apparentTemperature}`);
                    }
        });
    }
});

// 35f063dfc802c67fbc1b64bed5124ca0



