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
            for(var i=0;i<this.parentNodes.length;i++) {
                if (this.parentNodes.length === (2 * i + 1)) {
                    this.parentNodes[i].appendChild(node);
                    node.parent=this.parentNodes[i];
                    node.parent.left=node;
                    break;
                }
                if (this.parentNodes.length === (2 * i + 2)) {
                    this.parentNodes[i].appendChild(node);
                    node.parent=this.parentNodes[i];
                    node.parent.right=node;
                    break;
                }
            }
			this.parentNodes.push(node);
		}
	}
	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

var h = new MaxHeap();
    const nodes = [
        new Node(0, 0),
        new Node(1, 1),
        new Node(2, 2),
        new Node(3, 3),
        new Node(4, 4),
        new Node(5, 5),
        new Node(6, 6),
    ];
for(var i=0;i<nodes.length;i++) {
	h.insertNode(nodes[i]);
}

/*console.log(h.root===nodes[0]);
console.log(h.root.left);*/
/*console.log(h.root.right);
console.log(h.root.left.left);
console.log(h.root.left.right);*/
module.exports = MaxHeap;
