function fibonacciRecursive(n) {
	if (n < 1)
		return "Invalid input";
	else if (n == 1 || n == 2)
		return n - 1;
	else
		return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log("Test 0", fibonacciRecursive(0)); //testing error message
console.log("Test 1", fibonacciRecursive(1));
console.log("Test 2", fibonacciRecursive(2));
console.log("Test 4", fibonacciRecursive(4));
console.log("Test 10", fibonacciRecursive(10));