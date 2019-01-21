const request=require("request");

var geoAddress = (address)=>{
    console.log(address);
    return new Promise ((resolve,reject) => {
        var encodedAddress=encodeURIComponent(address);

request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=Oxe4lQWbAsB9PFTW5KU4ualwHQ8Ox0ok&location=${encodedAddress}`,
    json:true
},(error,response,body) => {
    if(error){
        reject('Unable to connect to the server');
    }

    else {

        resolve({
            Address:body.results[0].providedLocation.location,
            latitude:body.results[0].locations[0].latLng.lat,
            longitude:body.results[0].locations[0].latLng.lng
        });
}
});
    });
}

geoAddress('19146').then((location) => {
    console.log(JSON.stringify(location,undefined,2));
},(errorMess) => {
    console.log(errorMess);
});