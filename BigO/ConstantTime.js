const boxes = Array.from({length: 100}, () => Math.floor(Math.random() * 100));

function logFirstTwoBoxes(array) {
    console.log(array[0]); // O(1)
    console.log(array[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)

// O(1) - Constant time
// Does not changed based on number of elements