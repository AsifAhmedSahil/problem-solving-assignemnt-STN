//** */ 1.Task: Array Filtering and Mapping

//** */ Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const member = [
    {name:"asif",age:24,gender:"male"},
    {name:"shanaz",age:40,gender:"female"},
    {name:"salim",age:50,gender:"male"},
    {name:"shishir",age:19,gender:"male"}
]

const filterFemalesAndMapOtherNames = (member) =>{
    return member.filter(person => person.gender !== "female").map(males => males.name)
}

const result = filterFemalesAndMapOtherNames(member)
console.log(result)