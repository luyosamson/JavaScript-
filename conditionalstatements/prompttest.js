const { promptUser, close } = require('./prompt'); // Import both promptUser and close

async function main() {
    const name = await promptUser("Enter your name: "); // Wait for the user input
    console.log(`Hello, ${name}!`);

    close(); // Close the readline interface
}

main();
