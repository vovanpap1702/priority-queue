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
	  /*if(this.isEmpty()) {
	        throw new Error();
        }
        else {
            this.ct--;
            return this.heap.pop();
        }*/

	}

	size() {
		return this.heap.count;
	}

	isEmpty() {
		return this.heap.count===0?true:false;
	}
}
/*
const q = new Queue(10);
const qWithDefaultMaxSize = new Queue();

console.log(q.maxSize===10);
console.log(qWithDefaultMaxSize.maxSize===30);
*/
var q = new PriorityQueue(3);
q.push(0, 1);
q.push(1, 2);
q.push(2, 3);

module.exports = PriorityQueue;
