function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    let odds = []
    for (let i = 1; i < arr.length; i +=2) {
        odds.push(arr[i])
    }
    return odds
}


function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // let odds = []
    // // find max odd indice 
    // for (let i = arr.length; i > 0 && i % 2 != 0; i--) {
    //     odds.push(arr[i])
    // }
    // return odds
    let i = arr.length
    while (i > 0 && i % 2 != 0) {
        return i
    }
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}