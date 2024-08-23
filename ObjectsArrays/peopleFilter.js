const people=[
    {name:"Samson",age:23},
    {name:"Madueke",age:12},
    {name:"Frank",age:17},
    {name:"Amos",age:27},
    {name:"Fred",age:16}
]

const newPeople=people.filter((peoples)=>{
    return peoples.age<18
})

console.log(newPeople)