class DFSIterator {
	constructor (graph, node) {
		this.index = 0;
		this.keys = Object.keys(graph),
        this.graph = graph;
        this.node = node;
	}

	next = () => {
		var visited = [this.node];
        var stack = [this.node];
        while (stack.length !== 0) {         
            let node = stack[stack.length -1];        
            if (!visited.includes(node)){
                visited.push(node);
            }
            let remove_from_stack = true;
            for (let next of this.graph[node]) {
                if (!visited.includes(next)) {
                    stack.push(next);
                    remove_from_stack = false;
                    break;
                }
            
            }
            if (remove_from_stack) {
                stack.pop();
            }
            this.index ++;
        }      
        return visited;
	}

	hasNext = () => {
		return this.index < this.keys.length;
	}
};


class BFSIterator {
    constructor (graph, node) {
		this.index = 0;
		this.keys = Object.keys(graph),
        this.graph = graph;
        this.node = node;
	}

	next = () => {
		var visited = [this.node];
        var stack = [this.node];
        while (stack.length !== 0) {         
            let node = stack.pop(0);        
            for(let next of this.graph[node]) {
                if (!visited.includes(next)) {
                    visited.push(next);
                    stack.push(next);
                }
            }
            this.index ++;
        }      
        return visited;
	}

	hasNext = () => {
		return this.index < this.keys.length;
	}
};

graph = {
    'A': ['B', 'S'],
    'B': ['A'],
    'C': ['D', 'E', 'F', 'S'],
    'D': ['C'],
    'E': ['C', 'H'],
    'F': ['C', 'G'],
    'G': ['F', 'S'],
    'H': ['E', 'G'],
    'S': ['A', 'C', 'G']
} 

DFScollection = new DFSIterator(graph, 'A');
while (DFScollection.hasNext()) {
    console.log(DFScollection.next());
}

BFScollection = new BFSIterator(graph, 'A');
while (BFScollection.hasNext()) {
    console.log(BFScollection.next());
}

