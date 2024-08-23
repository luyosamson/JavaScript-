const animals=['Cat','Dog','Donkey','Camel','Elephant','Pig']
const newAnimal=animals.filter((animal)=>{
    return animal.length<4
})
console.log(newAnimal)