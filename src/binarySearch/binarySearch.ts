/**
 * Method for binary search of an element in an array
 * @param {number[]} arr an array in which the values ​​will be searched
 * @param {number} value the value to be found
 * @return {number} position of the element found or -1 if unsuccessful
*/
const binarySearch = (arr: number[], value: number): number => {
	let start = 0;
	let end = arr.length;
	while (start <= end) {
		const middle = Math.floor((end + start) / 2);
		if (arr[middle] === value) {
			return middle;
		}
		if (value < arr[middle]) {
			end = middle - 1;
		} else {
			start = middle + 1;
		}
	}
	return -1;
}

const initBinarySearchArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test
console.log(binarySearch(initBinarySearchArray, 4));
console.log(binarySearch(initBinarySearchArray, 11));
