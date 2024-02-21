
// data type 
// var old series 
let greeting= "Welcome";
let student = "Kevin";

let greetingMsg = `${greeting} ${student}`;

let images = "./img/imgtesting.jpg";
let img_1 = "./img/img2.jpg";



let card = `
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-1">
<a href="#">
    <img class="rounded-t-lg" src="${images1}" alt="img_1"/>
</a>
<div class="p-5">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
</div>
`;

let images1 = [
    "./img/imgtesting.jpg",
    "./img/img2.jpg",
    "./img/product_2.jpg",
    "./img/product_3.jpg",
  ];
  
  let cardContainer = document.querySelector("course");
  let cardTemplate = document.getElementById("card-template");
  
  for (let i = 0; i < 4; i++) {
    let cardClone = cardTemplate.content.cloneNode(true);
  
    // Set the image source for each card
    cardClone.querySelector(".card-image").src = images1[i];
  
    // Append the cloned card to the container
    cardContainer.appendChild(cardClone);
  }
  

let gettingCard = document.querySelector("#course");

for(let i = 0 ; i<4 ; i++){

gettingCard.innerHTML +=card;

}


// 3. boolean (true and false )
let isTure = true;
let isNewTure = true;

// is true = 1;
// false = 0;

//4. null 



// 

// let num1 = prompt("Enter your num1")
// let num2 = prompt("Enter your num2")

// console.log(`num1: ${num1}`)
// console.log(`num2: ${num2}`)

// arimetic operator
// let resultArea = document.getElementById("result")
// let output = parseInt(num1) + parseInt(num2)
// resultArea.innerHTML =`<h2>${output}</h2>`


// Ternary Operator (Conditon ?express_1 : express_2)

let isTeacher = true ;
let msg = isTeacher? "She is a teacher":"She is a students";
console.log(msg);

// nullish coleashing assigment (??= )

let animal = {
    // objects
    name:"lolo"
}
animal.age ??= 2;
console.log(animal.age);

// Nullish coalesing operator 
let phoneNumber 
let NULL_LISH = document.getElementById("nullish"); 
console.log(NULL_LISH);

NULL_LISH.innerHTML =`<h1 class="text-center"> phone Number : ${phoneNumber ?? "90909090900"} </h1>`;






















