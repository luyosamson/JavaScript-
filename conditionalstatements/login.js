// # Write a program that simulates a simple
// # login system. The program should check if 
// # both the username and password are correct:

// # If both are correct, print "Login successful".
// # If the username is correct but the password is wrong, 
// # print "Incorrect password".
// # If the username is wrong, print "Username not found".

let username = "Samson";
let password = "pass1234";

let user=prompt("Enter the username:")
let pass=prompt("Enter your password:")

if (user==username && pass==password){
    console.log("Login Successful")
}
else if (user!=username && pass!=password){
    console.log("Both Username and Password are incorrect")
}
else if(user != username){
    console.log("Username is not found")
}
else if(pass!=password){
    console.log("Incorrect password")
}
else{
    console.log("Invalid Input")
}