const Node = require('./node');

class MaxHeap {
	constructor()
	{
		this.root=null;
		this.parentNodes=[];
		this.count=0;
	}

	push(data, priority) {
		var tmp=new Node(data,priority);
		this.insertNode(tmp);
		this.shiftNodeUp(tmp);
	}

	pop() {
		
	}

	detachRoot() {
	   // console.log(this.root);
		var tmp=this.root;
		tmp.left=this.root.left;
        tmp.right=this.root.right;
		this.root=null;
		return tmp;
		
	}

	restoreRootFromLastInsertedNode(detached) {
	    var tmp=this.parentNodes.pop();
		/*this.root=new Node(tmp.data,tmp.priority)
       // this.root.appendChild(detached.left);
		//this.root.appendChild(detached.right);
        this.root.parent=null;
        this.root.right=detached.right;
        this.root.left=detached.left;
        this.root.left.parent=this.root;
		this.root.right.parent=this.root;*/
		tmp.left=detached.left;
		tmp.right=detached.right;
		if(tmp.left!==null)
        {
            tmp.left.parent=tmp;
        }
        if(detached.right!==null)
        {
            tmp.right.parent=tmp;
        }
        if(tmp.parent.left===tmp) {
            tmp.parent.left=null;
        }
        else {
            tmp.parent.right=null;
        }
        tmp.parent=null;
        this.root=tmp;
		//tmp=this.root;

		
	}

	size() {
		if(!this.isEmpty()) {
			return this.count;
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
		this.count++;
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
        if (node.parent !== null && node.priority > node.parent.priority) {
            for (var i = 0; i < this.parentNodes.length; i++) {
                if (this.parentNodes[i] === node) {
                    for (var j = 0; j < this.parentNodes.length; j++) {
                        if (node.parent === this.root) {
                            this.parentNodes[j] = node;
                            break;
                        }
                        else {
                            if (this.parentNodes[j] === node.parent) {
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
            if (node.parent === null) {
                this.root = node;
            }
                this.shiftNodeUp(node);
            }

    }
	shiftNodeDown(node) {
		
	}
}

var h = new MaxHeap();

h.push(42, 15);
h.push(14, 32);
h.push(0, 0);
const lastInsertedNode = h.root.right;
const left = h.root.left;
console.log(h);
const detached = h.detachRoot();
h.restoreRootFromLastInsertedNode(detached);
console.log(h);
console.log(h.root===lastInsertedNode);
console.log(h.root.left===left);
console.log(left.parent===lastInsertedNode);

module.exports = MaxHeap;
