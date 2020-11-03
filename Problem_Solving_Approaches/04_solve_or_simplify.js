// SOLVE THE PROBLEM
// Solve a simpler problem

// SIMPLIFY
// Find the core difficulty in what you're trying to do
// Temporarily ignore that difficulty
// Write a simplified solution
// Incorporate difficulty back into problem

// ========================== SOLVE/SIMPLIFY EXAMPLE EXERCISE ===================================
// Write a function which takes in a string and returns counts of each character in the string.
// =============================================================================================

function charCount(str){
    // make object to return at end
    var result = {};
    // loop over string (probably a for loop), for each character...
    for(var i = 0; i < str.length; i++){
        var char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add one to count

        if(result[char] > 0) {
            result[char]++;
        } 
        // if the char is a number/letter AND is not in object, add it object and set value to 1        
        else {
            result[char] = 1;
        };
    }
        // if char is something else (space, period, etc) don't do anything
    // return object at end
    return result;
}