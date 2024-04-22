/**
 * Method for checking the existence of a path in the graph from the starting point to the ending point
 * @param {Record<string, string[]>} graph graph in which the presence of a path is checked
 * @param {number} start the start point
 * @param {number} end the end point
 * @return {boolean} true if there is a path, false otherwise
*/
const breadthFirstSearch = (graph: Record<string, string[]>, start: string, end: string) => {
	let queue: string[] = [];
	queue.push(start);
	while (queue.length > 0) {
		const current = queue.shift();
		if (current && !graph[current]) {
			graph[current] = [];
		}
		if (current && graph[current]) {
			if (graph[current].includes(end)) {
				return true;
			} else {
				queue = [...queue, ...graph[current]];
			}
		}	
	}
	return false;
};

const graph: Record<string, string[]> = {
	a: ['b', 'c'],
	b: ['f'],
	c: ['d', 'e'],
	d: ['f'],
	e: ['f'],
	f: ['g']
};


// Test
console.log(breadthFirstSearch(graph, 'a', 'g'));