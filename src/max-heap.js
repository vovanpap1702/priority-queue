const Node = require('./node');

class MaxHeap {
	constructor()
	{
		this.root=null;
		this.parentNodes=[];
		//this.heap=[];
	}

	push(data, priority) {
		var tmp=new Node(data,priority);
		this.insertNode(tmp);
		this.shiftNodeUp(tmp);
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		if(!this.isEmpty()) {
			return this.parentNodes.length+1;
        }
	}

	isEmpty() {
		return this.root===null?true:false;
	}

	clear() {
        this.root=null;
        this.parentNodes=[];
	}

	insertNode(node) {
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
