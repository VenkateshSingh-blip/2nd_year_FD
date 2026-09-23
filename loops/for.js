// 1. for loop
console.log("For loop:");
for (let count = 1; count <=5; count++) {  // for(initialisatin; conditon; increment/decrement)
	// statement 
	//i can also initilaise out of loop ans increment and decrement in the loop
	console.log(count);
}

// 2. while loop
console.log("While loop:");
let number = 1;
while (number <= 5) {
	console.log(number);
	number++;
}

// 3. do...while loop
console.log("Do...while loop:");
let value = 1;
do {
	console.log(value);
	value++;
} while (value <= 5);

// A do...while loop runs at least once, even when the condition is false.
let firstAttempt = 10;
do {
	console.log("This runs once");
} while (firstAttempt < 5);

for(let j=1; ; j+=2){
	console.log(j);
	if(j>10)
	{
		break;
	}
}

let j=1;
for(; ;){
	if(j>10){
		break;
	}
	console.log(j);
	j+=2;
}

let sum = 0;
for(let k=0;k<=9;k++,sum +=k);
	console.log(sum);
let a= 4, b = 0 , c;
while(a>=0)
{
	a--;
	b++;
	if(a==b)
		break;
	else
		console.log(a,b)
}
let d= 4, e = 0 , f;
while(d>=0)
{
	d--;
	e++;
	if(d==e)
		continue;
	else
		console.log(d,e)
}
