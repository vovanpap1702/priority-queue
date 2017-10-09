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

	}

	shift() {

	}

	size() {
		return this.pq.length;
	}

	isEmpty() {
		
	}
}
/*
const q = new Queue(10);
const qWithDefaultMaxSize = new Queue();

console.log(q.maxSize===10);
console.log(qWithDefaultMaxSize.maxSize===30);
*/

module.exports = PriorityQueue;
