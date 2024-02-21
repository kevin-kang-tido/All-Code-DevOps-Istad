

// mehod one 
let animal  = ["cat","fish","dog"];

let copyArray = [...animal];

console.log(copyArray);
// method two 
let copyArray2 = Array.from(animal)
console.log(copyArray2)

// method 3 
let copyArray3 = animal.slice()
console.log("copy Array 3 ",copyArray3)
// method 4
let copyArray4 = animal.slice(1/2)
console.log("copy Array 4 ",copyArray3)


// remove array in javascript 
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// pop remove  the last array 
console.log(plants.pop());
console.log(plants);
// shipf remove array the frist array                                                                                                                                                                                                                                                                                
console.log(plants.shift());                                        
                    
// unshitf                                                                                                                                                                                                                                                 
console.log(plants.unshift());
console.log("Unshift",plants)
//
console.log(plants);
