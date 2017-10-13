const Node = require('./node');

class MaxHeap {
	constructor()
	{
		this.root=null;
		this.parentNodes=[];
		this.count=0;
/*		this.newnode=MaxHeap();
		this.tpush=false;*/
	}
	/*copy(node)
    {
        if (node === null) {
            return null;
        }
        var tn=new Node(node.data,node.priority);
        this.newnode.insertNode(tn);
        this.newnode.left = copy(node.left);
        this.newnode.right = copy(node.right);
        return this.newnode;


    }*/

	push(data, priority) {
	    /*if(this.parentNodes.length<1) {
	        this.tpush=true;
	    }*/
		var tmp=new Node(data,priority);
		this.insertNode(tmp);
		this.shiftNodeUp(tmp);
        /*if (this.parentNodes.length<=2) {
            if(this.parentNodes.length===1) {
                this.parentNodes=[];
                this.parentNodes.push(this.root);
            }
            else if (this.root.right===null) {
                this.parentNodes=[];
                this.parentNodes.push(this.root);
                this.parentNodes.push(this.root.left);

            }
            else {
                this.parentNodes=[];
                this.parentNodes.push(this.root.left);
                this.parentNodes.push(this.root.right);
            }
        }
        */
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
                    var j = 0;
                    for (j = 0; j < this.parentNodes.length; j++) {
                        if (this.parentNodes[j] === node.parent) {
                            var tmp = this.parentNodes[i];
                            this.parentNodes[i] = this.parentNodes[j];
                            this.parentNodes[j] = tmp;
                            break;
                        }
                    }
                    if(j===this.parentNodes.length) {
                        this.parentNodes[i] = node.parent;
                    }
                }
            }
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
/*h.root = new Node(0, 10);
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
console.log(h);
console.log(h.parentNodes[0]===correctParentNodesOrderAfterShiftUp[0]);
console.log(h.parentNodes[1]===correctParentNodesOrderAfterShiftUp[1]);
console.log(h.parentNodes[2]===correctParentNodesOrderAfterShiftUp[2]);*/
h.push(0, 0);
h.push(42, 15);
h.push(14, 32);
//h.push(16,17);
//h.push(17,16);
//h.push(13,7);
//h.push(2,2);
//h.push(1,1);


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
