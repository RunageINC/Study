function recursiveFactorial(n) {
	if (n == 0)
		return 1;

	return (n * recursiveFactorial(n - 1));
}

//alter this value to check other values
console.log(recursiveFactorial(5));