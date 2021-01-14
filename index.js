const { fetchBreedDescription } = require('./breedFetcher');

const userInput = process.argv.slice(2);


fetchBreedDescription(userInput, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});