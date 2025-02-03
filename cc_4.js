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
