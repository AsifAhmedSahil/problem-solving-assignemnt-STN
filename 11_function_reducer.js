//** */ Task: Functional Programming - Reduce
//* Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

const products = [
    {quantity:2,price:10},
    {quantity:5,price:15},
    {quantity:7,price:5},
]

const TotalPriceCalculate = (products) =>{
    return products.reduce((acc,item)=> acc + (item.quantity * item.price),0)

}

console.log(TotalPriceCalculate(products))