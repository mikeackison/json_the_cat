const request = require('request');

// access node request librry
// allow user to to specify the breed name using command-line arguments



// move the main request logic into the fetchBreedDescription function
// the callback should either return an error or null(if there isn't an error) 
// if error is null


const fetchBreedDescription = function(userInput, callback) {
  request( `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, function(error, response, body) {

    if (!error) {
      // if there is no error/ if error is not null

      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the body
      
      // deserialization
      const data = JSON.parse(body);
      // console.log("data.length", data.length);
      
      if (data.length !== 0) { // if the array is not empty
        // console.log("desc:", data[0].description);
        callback(null, data[0].description);
      } else {
        // if the array is empty, breed not found
        callback(null, "Requested breed not found.");
      }
    } else {
      // otherwise if there is an error
      // console.error('error:', error); // Print the error if one occurred
      callback(error, null);
    }
  });

};

  module.exports = { fetchBreedDescription };