//Declare variables called country, continent and population and assign their values according to your own country (population in millions).
//Log their values to the console.

const country = "Pakistan";
const continent = "Asia";
let population = 24000000;
console.log(
  `Country: ${country}, Continent: ${continent}, Population: ${population}`,
);

// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
//Log the types of isIsland, population, country and language to the console

const isIsland = false;
let language;

console.log(
  `type of Country: ${typeof country}, type of Continent: ${typeof continent}, type of Population: ${typeof population}, type of ${typeof isIsland}, type of ${typeof language}`,
);
//Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).
//Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
//Try to change one of the changed variables now, and observe what happens.
language = "Urdu";

// changed country, continent and isIsland from let to const
// isIsland= true => gives error
// country = china => gives error
// continent = Europe => gives error

/*If your country split in half, and each half would contain half the population, then how many people would live in each half?
Increase the population of your country by 1 and log the result to the console.
Finland has a population of 6 million. Does your country have more people than Finland?
The average population of a country is 33 million people. Does you country have less people than the average country?
Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/

let halfPopulation = population / 2;

console.log(population + 1);

let myCountryPopulation = population;
let finlandPopulation = 6000000;
console.log(myCountryPopulation > finlandPopulation); // => logs false
console.log(
  "my conuntry's population is less than average population" +
    (myCountryPopulation < 33000000),
); // => logs true

let description =
  "'Portugal is in Europe, and its 11 million people speak portuguese'";
