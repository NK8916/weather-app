const yargs = require("yargs");
const axios = require("axios");

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

var encodedAddress = encodeURIComponent(argv.address); 
console.log(encodedAddress);
var geocodeUrl= `http://www.mapquestapi.com/geocoding/v1/address?key=Oxe4lQWbAsB9PFTW5KU4ualwHQ8Ox0ok&location=${encodedAddress}`
axios.get(geocodeUrl).then((response)=>{
    // console.log(response);
    var lat=response.data.results[0].locations[0].latLng.lat;
    var long=response.data.results[0].locations[0].latLng.lng;
    console.log(lat,long);
    var weatherUrl=`https://api.darksky.net/forecast/35f063dfc802c67fbc1b64bed5124ca0/${lat},${long}`
    return axios.get(weatherUrl);
}).then((response)=>{
    var temperature=response.data.currently.temperature;
    var apparentTemperature=response.data.currently.apparentTemperature;
    console.log(`Temperature is ${temperature}.It feels like ${apparentTemperature}`);
}).catch((e)=>{
    console.log(e.message);
})