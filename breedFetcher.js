const request = require('request');

// access node request librry
// allow user to to specify the breed name using command-line arguments

const userInput = process.argv.slice(2);

request(

  // if the breedname is not found it reutuns undefined
  // if error is not null

  `https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, function(error, response, body) {

    if (!error) {
      // if there is no error
      
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      
      // deserialization
      const data = JSON.parse(body);
      console.log("Datat.length", data.length);
      
      if (data.length !== 0) {
        // if the array is empty
        // print  out first entry in the data array
        console.log("first entry: weight:", data[0].weight);
      } else {
        console.log("Requested breed not found");
      }
    } else {
      // otherwise if there is an error
      console.log("Request Failed");
    }
  });

