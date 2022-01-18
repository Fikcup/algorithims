const boxes = ['a', 'b', 'c', 'd', 'e'];

function logAllPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}

logAllPairs(boxes);

// O(n^2)
// Nesting multiplies complexity
// Quadratic increment