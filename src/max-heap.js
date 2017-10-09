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
			return this.parentNodes.length;
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
		if(this.root===null) {
			this.root=node;
			this.parentNodes.push(node);
		}
		else
		{
            parentNodes.push(node);
            var i;
            for( i=0;(2*i+1)!=this.parentNodes.length-1||
			(2*i+2)!=this.parentNodes.length-1;i++);
            if(this.parentNodes.length-1===(2*i+1)) {
            	this.parentNodes[i].left=node;
			}
            if(this.parentNodes.length-1===(2*i+2)) {
                this.parentNodes[i].right=node;
            }

		}

		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
