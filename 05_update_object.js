//** */ 5.Task: Find and Modify

//** */ Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const personData = [
    {name:"asif",age:24},
    {name:"Towsif",age:19},
    {name:"salim",age:40},
]

const updateAgeUsingPersonName = (arr,name,updatedAge) =>{
    const findPerson = arr.find(person => person.name === name) 
    

    if(findPerson){
        findPerson.age = updatedAge
    }

    return arr

}

const updatedPersonAge = updateAgeUsingPersonName(personData,"asif",35)

console.log(updatedPersonAge)