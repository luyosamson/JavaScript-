const product={
    name:"Laptop",
    price:890,
    category:"Electronic"
}

const{name:productName,price:productPrice}=product
const{category="general"}=product//Incase it does not exist in the object

console.log(productName)
console.log(productPrice)
console.log(category)