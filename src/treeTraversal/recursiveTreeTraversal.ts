import { type TTree } from "../types";

/**
 * Breadth-first recursive tree traversal method
 * @param {TTree[]} tree tree for traversal method
 * @return {number} sum of values of nodes
*/
const recursiveTreeTraversal = (tree: TTree[]) => {
	let sum = 0;
	tree.forEach(child => {
		sum += child.value;
		if (child.children) {
			sum += recursiveTreeTraversal(child.children);
		}
	})
	return sum;
};

const tree = [
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
console.log(recursiveTreeTraversal(tree));

