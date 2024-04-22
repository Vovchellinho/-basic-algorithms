/**
 * Method for compute cache
 * @param {function} callback callback for cache
 * @return {number} result of compute
*/
const cacheFunction = (callback: (n: number) => number) => {
	const cash = new Map();
	return (n: number) => {
		if (cash.get(n)) {
			console.log("From cache");
			return cash.get(n);
		} else {
			const result = callback(n);
			console.log("Calculated");
			cash.set(n, result);
			return result;
		}
	}
};

const factorial = (n: number): number => {
	let result = 1;
	while (n > 0) {
		result *= n;
		n -= 1;
	}
	return result;
};

const cacheFactorial = cacheFunction(factorial);

// Test
console.log(cacheFactorial(1))
console.log(cacheFactorial(4))
console.log(cacheFactorial(5))
console.log(cacheFactorial(4))
console.log(cacheFactorial(3))
console.log(cacheFactorial(5))
