const Node = require('./node');

class MaxHeap {
	constructor()
	{
		this.root=null;
		this.parentNodes=[];
		this.nodes=[];
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
			return this.nodes.length;
        }
	}

	isEmpty() {
		return this.root===null?true:false;
	}

	clear() {
        this.root=null;
        this.parentNodes=[];
        this.nodes=[];
	}

	insertNode(node) {
		if(this.root===null) {
			this.root=node;
		/*	this.parentNodes.push(node);
			this.parentNodes.push(node);*/
			this.parentNodes.push(node);
		}
		else
		{
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if(this)
				var tmp=[];
				for(var i=1;i<this.parentNodes.length;i++) {
					tmp.push(this.parentNodes[i]);
				}
				this.parentNodes=tmp;
                this.parentNodes[0].appendChild(node);
                this.parentNodes.push(node);
			}
            /*for(var i=0;i<this.nodes.length;i++) {
                if (this.nodes.length === (2 * i + 1)) {
                    this.nodes[i].appendChild(node);
                    node.parent=this.nodes[i];
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
			this.parentNodes.push(node);*/
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

h.insertNode(nodes[0]);
console.log(h.parentNodes[0]===nodes[0]);

h.insertNode(nodes[1]);
console.log(h.parentNodes[0]===nodes[0]);
console.log(h.parentNodes[1]===nodes[1]);

6h.insertNode(nodes[2]);
console.log(h.parentNodes[0]===nodes[1]);
console.log(h.parentNodes[1]===nodes[2]);

h.insertNode(nodes[3]);
console.log(h.parentNodes[0]===nodes[1]);
console.log(h.parentNodes[1]===nodes[2]);
console.log(h.parentNodes[2]===nodes[3]);

h.insertNode(nodes[4]);
console.log(h.parentNodes[0]===nodes[2]);
console.log(h.parentNodes[1]===nodes[3]);
console.log(h.parentNodes[2]===nodes[4]);

h.insertNode(nodes[5]);
console.log(h.parentNodes[0]===nodes[2]);
console.log(h.parentNodes[1]===nodes[3]);
console.log(h.parentNodes[2]===nodes[4]);
console.log(h.parentNodes[3]===nodes[5]);

h.insertNode(nodes[6]);
console.log(h.parentNodes[0]===nodes[3]);
console.log(h.parentNodes[1]===nodes[4]);
console.log(h.parentNodes[2]===nodes[5]);
console.log(h.parentNodes[3]===nodes[6]);

module.exports = MaxHeap;
