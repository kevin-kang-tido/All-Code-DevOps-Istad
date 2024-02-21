

// 
function printWelcome(){
    document.write(`<h1>Hello javascript Function!!!</h1>`);
}
printWelcome();

// function with paramater 
function greetting(write){
    document.getElementById("header").innerHTML =`<h1 class=""text-center">HEllO WORLD!${write}</h1>`;
}
// function 
greetting("this is king");

// 

let sum = (x=4,y=6)=>{
    return x + y;
}

let resut = sum(50,5);


console.log(resut);


let showTow = (resultShow) => {
document.getElementById("main").innerHTML = `<h1>Here is the result values = ${resultShow}</h1>`;
}
showTow(resut);

// 







