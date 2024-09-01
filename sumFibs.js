function sumFibs(num) {
    const fib = [1, 1]; // Start with [1, 1] to avoid including 0
    let count = 2; // Start with the sum of the first two odd numbers (1 + 1)

    while (true) {
        let newFib = fib[fib.length - 1] + fib[fib.length - 2];
        if (newFib > num) {
            break; // Stop if the next Fibonacci number is greater than num
        }

        fib.push(newFib);

        if (newFib % 2 !== 0) {
            count += newFib; // Add only if the newFib is odd
        }
    }

    console.log("Fibonacci sequence:", fib);
    console.log("Sum of odd Fibonacci numbers:", count);
    return count; // Return the sum of odd Fibonacci numbers
}

console.log(sumFibs(1000)); // Test with a limit of 1000
