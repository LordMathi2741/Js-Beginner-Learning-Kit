//Provides a new array, with numbers
const numbers = [1,2,3,4,5,6,7,8,9,10];

//Filter method iterate over the array and return the numbers that are greater than 5
const numbersGreaterThanFive = numbers.filter(number => number >5);

//Return the first number that is greater than 5
const foundNumber = numbers.find(number => number > 5);

//Calculate the sum of the numbers, first start with acumulator and the number to add
const sumNumbers = numbers.reduce((sum, number) => sum + number, 0);

//Declares a lambda function that sum all numbers in the array
const sumNumberV2 = (() => numbers.reduce((accumulator, number) => accumulator + number, 0))


//Function that calculates the sum of the numbers
function sum(){
    let sum = 0;
    //Map iterate ober the array and add the number to the sum
    numbers.map(number => sum += number);
    return sum;  //Return the sum of the numbers
}

function findAllTypesCats(){
    const animals = ['dog', 'cat', 'bird', 'fish', 'cat-fish'];
    const cats = [];
    animals.forEach(animal => {
        if(animal.includes('cat')){
            cats.push(animal);
        }
    });
    return cats; //Return the array with the cats
}

console.log(numbersGreaterThanFive);
console.log(sumNumbers);
console.log(foundNumber);
console.log(findAllTypesCats());
console.log(sum())
console.log(sumNumberV2);