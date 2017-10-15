const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize)
	{
		if(isNaN(maxSize)===true) {
            this.maxSize=30;
        }
		else {
            this.maxSize=maxSize;
        }
        this.pq = [];
		this.heap=new MaxHeap();
	}

	push(data, priority) {
	    if(this.heap.count<this.maxSize) {
            this.heap.push(data, priority);
        }
        else
        {
            throw new Error();
        }

	}

	shift() {
	    if(this.isEmpty()) {
	        throw new Error();
        }
        else {
            return this.heap.pop();
        }

	}

	size() {
		return this.heap.count;
	}

	isEmpty() {
		return this.heap.count===0?true:false;
	}
}

const q = new PriorityQueue(10);

const nodes = [
    { priority: 10, data: 1 },
    { priority: 20, data: 2 },
    { priority:  5, data: 3 },
    { priority:  0, data: 4 },
    { priority:  8, data: 5 },
    { priority: 12, data: 6 },
    { priority: 17, data: 7 },
    { priority: 15, data: 8 },
];

const eD = [2, 7, 8, 6, 1, 5, 3, 4]

q.push(nodes[0].data, nodes[0].priority);
q.push(nodes[1].data, nodes[1].priority);
q.push(nodes[2].data, nodes[2].priority);
q.push(nodes[3].data, nodes[3].priority);
q.push(nodes[4].data, nodes[4].priority);
q.push(nodes[5].data, nodes[5].priority);
q.push(nodes[6].data, nodes[6].priority);
q.push(nodes[7].data, nodes[7].priority);
console.log(q.shift()===eD[0]);
console.log(q.shift()===eD[1]);
console.log(q.shift()===eD[2]);
console.log(q.shift()===eD[3]);
console.log(q.shift()===eD[4]);
console.log(q.shift()===eD[5]);
console.log(q.shift()===eD[6]);
console.log(q.shift()===eD[7]);
module.exports = PriorityQueue;
