// FREQUENCY COUNTER PATTERN

// This pattern uses objects or sets to collect values/frequencies of values
// This can often avoid the need for nested loops or O(N^2) operations wiith arrays/strings

// =====================================================================
// ================== FREQUENCY COUNTER CHALLENGE ======================
// =====================================================================

// Write a function called same which accepts two arrays.
// The function should return true if every value in the array has its
// corresponding value squared in the second array.
// The frequency of values must be the same.

function same(arr1,arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex, 1)
    }
    return true;
}

// We need to splice to keep the frequency occurences accurate.

[1,2,3,2], [9,1,4,4]

// Refactored solution - 2N - time complexity O(n) instead of naive O(N^2) quadratic
// ********ALWAYS BETTER TO HAVE TWO LOOPS INSTEAD OF NESTED LOOPS ********

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

same([1,2,3,2,5], [9,1,4,4,11])
