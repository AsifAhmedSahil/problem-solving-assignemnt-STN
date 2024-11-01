//** */ 4.Task: Sorting Objects

//** */ Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
    {make:"Honda",model:"Civic",year:2015},
    {make:"Toyota",model:"Mark-II",year:1985},
    {make:"Ford",model:"Mastang",year:2010},
]

const sortingAscendingOrder = (cars) =>{
    return cars.sort((a,b)=>a.year - b.year)

}

console.log(sortingAscendingOrder(cars))