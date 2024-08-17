const readline = require('readline');

// Create an interface for reading input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Enter your name: ', (name) => {
    console.log(`Hello, ${name}!`);

    // Prompt the user for another input
    rl.question('Enter your age: ', (age) => {
        if (age >= 18) {
            console.log("You are an adult.");
        } else {
            console.log("You are a minor.");
        }

        // Close the readline interface after collecting inputs
        rl.close();
    });
});
