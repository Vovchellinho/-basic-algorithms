/**
 * Method for sorting an array by selection method
 * @param {number[]} arr an array to be sorted
 * @return {number[]} sorted array
*/
const selectionSort = (arr: number[]): number[] => {
	for (let i = 0; i < arr.length - 1; i++) {
		let minPos = i;
		for (let pos = i; pos < arr.length; pos++) {
			if (arr[pos] < arr[minPos]) {
				minPos = pos;
			}
		}
		const tmp = arr[i];
		arr[i] = arr[minPos];
		arr[minPos] = tmp;
	}
	return arr;
};

const initSelectionSortArray = [0, 10, 5, 3, 6, 3, 7, 10, 12];

// Test
console.log(selectionSort(initSelectionSortArray))