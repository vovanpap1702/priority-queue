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
		this.ct=0;
		this.heap=new MaxHeap();
	}

	push(data, priority) {
	    if(this.ct<this.maxSize) {
            this.heap.push(data, priority);
            this.ct++;
        }
        else
        {
            throw new Error();
        }

	}

	shift() {

	}

	size() {
		return this.maxSize;
	}

	isEmpty() {
		return this.maxSize>0?true:false;
	}
}
/*
const q = new Queue(10);
const qWithDefaultMaxSize = new Queue();

console.log(q.maxSize===10);
console.log(qWithDefaultMaxSize.maxSize===30);
*/

module.exports = PriorityQueue;
