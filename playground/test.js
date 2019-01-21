console.log("Starting App");

setTimeout(()=>{
    console.log('Inside of a callback');
},2000);

setTimeout(()=>{
    console.log('Second timeout');
},0);

console.log('finishing up');