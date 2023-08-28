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
    // find max odd indice 
    if (arr.length % 2 === 0) {
        start = arr.length - 1
    }
    else (
        start = arr.length - 2
    )

    // loop
    let odds = []
    for (let i = start; i > 0 ; i-= 2) {
        odds.push(arr[i])
    }
    return odds
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    power2 = []
    for (let i = 0; Math.pow(2, i) < arr.length; i++) {
        power2.push(arr[Math.pow(2, i)])
    }
    return power2
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    power = []
    for (let i = 0; Math.pow(n, i) < arr.length; i++) {
        power.push(arr[Math.pow(n, i)])
    }
    return power
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    half = []
    for (let i = 0; i < Math.round((arr.length) / 2); i++) {
        half.push(arr[i])
    }
    return half
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    half = []
    for (let i = Math.ceil((arr.length) / 2) ; i < arr.length; i++) {
        half.push(arr[i])
    }
    return half
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}