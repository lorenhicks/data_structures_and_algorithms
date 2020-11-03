// EXPLORE EXAMPLES
// Coming up with examples can help you understand the problem better
// User stories
// Unit tests

// Start with simple examples - with an input and an output
// Progress to more complex examples
// Explore examples with empty inputs
// Explore examples with invalid inputs (helpful in real world UI)

// ============================ CONCRETE EXAMPLE EXERCISE =====================================
// Write a function which takes in a string and returns counts of each character in the string.
// ============================================================================================
// We're given a function called charCount
    charCount("aaaa"); // Should return something like this: {a:4}
    charCount("hello") // Returns: {h:1, e:1, l:2, o:1}
    // Should the function also return character count for letters that are NOT there? b:0 c:0, etc
    // This would make coding simpler since you would not need to add each letter, each letter would already be there and set to 0.
    "my phone number is 182763" // What would we expect to return? Spaces? Other characters? Numbers?
    "Hello hi" // Do we store uppercase or lowercase or ignore casing? 
    charCount("") // Return empty object, null, false, undefined, or an error? What if someone passes a number when it calls for a string? Or an object? Or null? Understanding edge cases is important in the real world to build a more robust solution. It can also give you insight into how a problem works.