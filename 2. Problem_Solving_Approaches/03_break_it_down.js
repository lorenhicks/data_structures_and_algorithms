// BREAK IT DOWN
// Communicate what you're doing (steps you plan to take it)
// Pseudocode
// Forces you to think about your code before you write it
// Helps you catch any concept errors before applyingd detail (language syntax)

// ========================== BREAK IT DOWN EXAMPLE EXERCISE ===================================
// Write a function which takes in a string and returns counts of each character in the string.
// =============================================================================================

function charCount(str){
    // do something
    // return an object with keys that are lowercase alphanumeric characters in the string; values should be the counts for those characters in the string
    // only keeping track of lowercased alphanumeric characters 
}

function charCount(str){
    // make object to return at end
    // loop over string (probably a for loop), for each character...
        // if the char is a number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND is not in object, add it object and set value to 1
        // if char is something else (space, period, etc) don't do anything
    // return object at end
}