const request=require("request");

var  geoAddress = (address,callback) => {
    var encodedAddress=encodeURIComponent(address);

request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=Oxe4lQWbAsB9PFTW5KU4ualwHQ8Ox0ok&location=${encodedAddress}`,
    json:true
},(error,response,body) => {
    if(error){
        callback('Unable to connect to the server');
    }

    else {

        callback(undefined,{
            Address:body.results[0].providedLocation.location,
            latitude:body.results[0].locations[0].latLng.lat,
            longitude:body.results[0].locations[0].latLng.lng
        });
}
});
};

module.exports={geoAddress};