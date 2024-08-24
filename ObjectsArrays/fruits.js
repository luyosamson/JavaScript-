const fruits=['Apple','Guava','Avocado','PawPaw','Watermelon','Guava']
const veg=['Cabbage','Kales','Tommatoes']

const newCase=fruits.map((fruit)=>{
    return fruit.toUpperCase()
})
console.log(newCase)

const fruitLength=fruits.map((f)=>{
    return f.length
})
console.log(fruitLength)

const message=fruits.map((fruit)=>{
    console.log(`I like ${fruit}`)
})

const newArr=fruits.concat(veg)
console.log(newArr)