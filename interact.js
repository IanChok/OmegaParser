// Get process.stdin as the standard input object.
var standard_input = process.stdin;

// Set input character encoding.
standard_input.setEncoding('utf-8');

// Prompt user to input data in console.
console.log("Please input text in command line.");

// When user input data and click enter key.
standard_input.on('data', function (data) {

    // User input exit.
    if (data === 'exit\n') {
        // Program exit.
        console.log("User input complete, program exit.");
        process.exit();
    } else {
        input(data)
    }
});

function input(str) {
    console.log('repated: ', str)
}

