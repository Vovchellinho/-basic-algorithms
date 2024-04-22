/**
 * Bubble Sort Array Method
 * @param {number[]} arr an array to be sorted
 * @return {number[]} sorted array
 */
const bubbleSort = (arr: number[]): number[] => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j + 1] < arr[j]) {
				const tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
	return arr;
}

const initBubbleSortArray = [10, 3, 0, 2, 1, 6, 3, 5, 15];

// Test
console.log(bubbleSort(initBubbleSortArray))