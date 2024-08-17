// "Child" if the age is 0-12
// "Teenager" if the age is 13-19
// "Adult" if the age is 20-59
// "Senior" if the age is 60 and above

const age=prompt("Enter your age: ")
if (age>=0 && age<13){
    console.log("Child")
}
else if(age>=13){
    console.log("Teenager")
}
else if(age>=20){
    console.log("Senior")
}
else{
    console.log("Invalid input")
}