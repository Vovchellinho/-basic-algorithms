/**
 * Method for binary search of an element in an array bvia recursion
 * @param {number[]} arr an array in which the values ​​will be searched
 * @param {number} value the value to be found
 * @param {number} start index of the left border of the array for the search
 * @param {number} end index of the right border of the array for the search
 * @return {number} position of the element found or -1 if unsuccessful
*/
const binaryRecursionSearch = (arr: number[], value: number, start: number, end: number): number => {
	let middle = Math.floor((end + start) / 2);
	if (arr[middle] === value) {
		return middle;
	} else if (value < arr[middle]) {
		return binaryRecursionSearch(arr, value, start, middle - 1);
	} else if (value > arr[middle]) {
        return binaryRecursionSearch(arr, value, middle + 1, end);
	};
	return -1;
}

const initBinarySearchRecursionArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test
console.log(binaryRecursionSearch(initBinarySearchRecursionArray, 4, 0, initBinarySearchRecursionArray.length));
console.log(binaryRecursionSearch(initBinarySearchRecursionArray, 11, 0, initBinarySearchRecursionArray.length));
