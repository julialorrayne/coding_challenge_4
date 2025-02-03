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

//Task 7: forEach() Method
orders = [130,131,132]; //Declared an array orders with three order IDs.
orders.forEach((id) => {
    console.log(`This is your id order number: ${id}.`)
}) //Used the forEach() method to log each order ID to the console.

//Task 8: Function Declaration
const calculateTax = function(amount,tax_rate){
    let result = amount*tax_rate
    return result
}; // function calculateTax that takes an amount and tax rate and return calculated tax.

let tax = calculateTax(1000,0.1); //called the functon

console.log(`This is the tax amount: ${tax}`); // //Logged the result to the console.

//Task 9: Function Expressions
const applyDiscount = function(price,discount_percent){
    let discount = price*discount_percent
    return discount
}; //Declared a function expression applyDiscount that takes a price and discount percentage
//and returns the discounted price. 

let discount = applyDiscount(2000,0.2) //called the functon

console.log(`This is the discount amount $${discount}`); //Logged the result to the console.

//Task 10: Arrow Functions
const calculatedPoints = (purchase_amount) =>{
    points_earned = purchase_amount/10
    return points_earned
};//arrow function calculatePoints that takes a purchase amount and returns 1 point per $10 spent. 

let points = calculatedPoints(100); //called the functon

console.log(`Total points earned: ${points}.`); //Logged the result to the console