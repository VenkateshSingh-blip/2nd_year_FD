//global scope
let x=10;
function display(){
    console.log(x);
}
display();


//function scope
function s(){
    let x=10;
    console.log(x);
}
s();


// block scope
if (true) {
    let x=10;
    let y=20;

    console.log(x);
    console.log(y);
}
//hosting 

console.log(name);
var name="John";


console.log(age);
let age = 20;   // reference error because of let and cont if we print firt then error occure that is temperor dead zone appear.

// TDZ start 
let Age = 20;
// TDZ end 
// the period between entring a scope and initialise with data type let and const  occure TDZ 

// Closer 
// the closer occure inner function remeber the variable of outer function even the outer variable finished .


function outer(){
    let counter = 0;


    function inner(){
        counter++;
        console.log(counter);
    }

    return inner;

    
}

const increment = outer();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();
increment();

