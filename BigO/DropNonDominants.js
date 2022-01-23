function printAllPairs(nums) {
    console.log('These are the numbers:');
    // O(n)
    nums.forEach((num) => {
        console.log(num)
    });

    // O(n^2)
    console.log('and these are their sums:');
    nums.forEach((numOne) => {
        nums.forEach((numTwo) => {
            console.log(numOne + numTwo);
        });
    });
}

let numbers = [1, 2, 3, 4, 5];

// O(n^2)
printAllPairs(numbers);