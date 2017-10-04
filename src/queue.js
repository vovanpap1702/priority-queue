const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize)
	{
		if(maxSize.isNumber()===false) {
            this.pq = new Node[30];
            this.maxSize=30;
        }
		else {
            this.pq = new Node[maxSize];
            this.maxSize=maxSize;
        }
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

module.exports = PriorityQueue;
