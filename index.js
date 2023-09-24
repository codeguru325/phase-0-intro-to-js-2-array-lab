// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name)
{    
    cats.push(name)  
}
function destructivelyPrependCat(name){    
    cats.unshift(name)  
}

function destructivelyRemoveLastCat(name){

    cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
 cats.shift()
}

// function appendCat(name, cats){
//     const newCats = [...cats]
//    newCats.push(name)
//     return newCats
// }
const coolCities = ["New York", "San Francisco"];

const allCities = ["Los Angeles", ...coolCities];


function appendCat(name) {
    const newArray = [ ...cats, name];

    // Return the new array
    return newArray;
  }
     
  function prependCat(name) {
    // Create a new array with the new cat name followed by the elements from the original array
    const newArray = [name, ...cats];
  
    // Return the new array
    return newArray;
  }

  function removeLastCat() {
    // Create a new array by slicing the original array to exclude the last element
    const newArray = cats.slice(0, -1);
  
    // Return the new array
    return newArray;
  }
  function removeFirstCat() {
    // Create a new array by slicing the original array to exclude the first element
    const newArray = cats.slice(1);
  
    // Return the new array
    return newArray;
  }
    