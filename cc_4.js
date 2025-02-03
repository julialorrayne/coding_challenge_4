//Task 1: If Statements
let purchaseAmount = 200; //Declared variable purchaseAmount with a value

if (purchaseAmount >100) {
    finalAmount = purchaseAmount-(purchaseAmount*0.1)
} else {
    finalAmount = purchaseAmount
}; //Used an if statement to apply a discount if the amount is greater than $100

console.log(`Final amount after discount: $${finalAmount}`); //Logged the final amount to the console


//Task 2: For Loop
let sales = [100,150,200,250,300]; //Declare an array sales with five sales figures
sum = 0;
for(let i=0; i<sales.length;i++){
    sum += sales[i]
}; //Used a for loop to calculate the total sales

console.log(`Total sales amount: $${sum}`); //Logged the total sales to the console


//Task 3: While Loop
let stock = 10; //Declared a variable stock with an initial value of 10
while (stock>0) {
    console.log(`Stock value is $${stock}.`) //Logged each decrement to the console using a template literal
    stock--;   
}; //Used a while loop to decrease stock until it reaches zero.


//Task 4: Do...While Loop
let responses = 0; //Declared a variable responses with an initial value of zero.
do{
    console.log(`User response:${responses}`);
    responses ++; //Logged each response count to the console
} while (responses <4); //Used a do...while loop to collect responses, until it reaches 3.

//Task 5: For...In Loop
let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
};//Declared an object employee 

for (let i in employee) {
    console.log(`${i}: ${employee[i]}`) //Logged each property and value to the console 
}; //Used a for...in loop to iterate through the object properties.


//Task 6: For...Of Loop
products = ["IPhone", "MacBook", "Apple Watch"]; //Declared an array products with three product names
for (let i of products) {
    console.log(`Name of product: ${i}.`); //Logged each product name to the console 
};//Used a for...of loop to display each product.