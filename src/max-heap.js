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
			if(this.parentNodes[0].right!==null) {
				var tmp=[];
				for(var i=1;i<this.parentNodes.length;i++) {
					tmp.push(this.parentNodes[i]);
				}
				this.parentNodes=tmp;
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
		while(node.parent!==null&&node.priority>node.parent.priority)
		{
            for(var i=0;i<this.parentNodes.length;i++) {
                if(this.parentNodes[i]===node) {
                    for(var j=0;j<this.parentNodes.length;j++) {
                            if(node.parent===this.root) {
                                this.parentNodes[i] = node.parent;
                            }
                            else {
                                if(this.parentNodes[j]===node.parent) {
                                var tmp = this.parentNodes[i];
                                this.parentNodes[i] = this.parentNodes[j];
                                this.parentNodes[j] = tmp;
                                break;
                            }
						}
                    }
				}
            }//this.parentNodes[i].swapWithParent();
			node.swapWithParent();
			if(node.parent ===null)
			{
				this.root=node;
			}
		}
		
	}

	shiftNodeDown(node) {
		
	}
}
var h = new MaxHeap();

h.root = new Node(0, 10);
h.root.appendChild(new Node(1, 5));
h.root.appendChild(new Node(2, 7));
h.root.left.appendChild(new Node(3, 20));
h.parentNodes = [
    h.root.left,
    h.root.right,
    h.root.left.left,
];
const correctParentNodesOrderAfterShiftUp = [
    h.root,
    h.root.right,
    h.root.left
]

h.shiftNodeUp(h.root.left.left);

console.log(h.parentNodes[0]===correctParentNodesOrderAfterShiftUp[0]);
console.log(h.parentNodes[1]===correctParentNodesOrderAfterShiftUp[1]);
console.log(h.parentNodes[2]===correctParentNodesOrderAfterShiftUp[2]);


module.exports = MaxHeap;
