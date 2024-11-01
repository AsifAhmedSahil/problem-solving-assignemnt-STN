//** */ 2.Task: Object Manipulation

//* */ Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
    {title: "Dopamin Detox",author: "Thibo Meris", year: 1980},
    {title: "Atomic Habit",author: "James Clear", year: 1985},
    {title: "Power of subconsious mind",author: "Thibo Meris", year: 1999},
]

const booksTitle = (books) =>{
    return books.map((item)=>item.title)
}

const result = booksTitle(books)
console.log(result)