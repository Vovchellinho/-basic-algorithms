import { type TTree } from "../types";

/**
 * Breadth-first iterative tree traversal method
 * @param {TTree[]} tree tree for traversal method
 * @return {number} sum of values of nodes
*/
const iterativeTreeTraversal = (tree: TTree[]) => {
	if (!(tree.length > 0)) {
		return 0;
	}
	let sum = 0;
	const stack: TTree[] = [];
	tree.forEach(child => stack.push(child));
	while (stack.length > 0) {
		const current = stack.pop();
		sum += current?.value ?? 0;
		current?.children?.forEach(child => stack.push(child));
	}
	return sum;
};

const treeIterative = [
	{
		value: 5,
		children: [
			{
				value: 10,
				children: [
					{
						value: 11
					}
				]
			},
			{
				value: 7,
				children: [
					{
						value: 5,
						children: [
							{
								value: 1
							}
						]
					}
				]
			}
		]
	},
	{
		value: 5,
		children: [
			{
				value: 10,
			},
			{
				value: 15
			}
		]
	},
	
];

// Test
console.log(iterativeTreeTraversal(treeIterative));

