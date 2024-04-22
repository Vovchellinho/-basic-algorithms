/**
 * Quick Sort Array Method
 * @param {number[]} arr an array to be sorted
 * @return {number[]} sorted array
 */
const quickSort = (arr: number[]): number[] => {
	if (arr.length <= 1) {
		return arr;
	}
	const middle = Math.floor(arr.length / 2);
	const left: number[] = [];
	const right: number[] = [];
	const middles: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < arr[middle]) {
			left.push(arr[i]);
		} else if(arr[i] > arr[middle]) {
			right.push(arr[i]);
		} else {
			middles.push(arr[middle]);
		}
	}
	return [...quickSort(left), ...middles, ...quickSort(right)];
}

const initQuickSortArray = [10, 3, 0, 2, 1, 6, 3, 5, 15];

// Test
console.log(quickSort(initQuickSortArray))