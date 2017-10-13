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
		var tmp=this.root;
		tmp.left=this.root.left;
        tmp.right=this.root.right;
		this.root=null;
		if(this.parentNodes[0]===tmp) {
            var tmp1=[];
            for(var i=1;i<this.parentNodes.length;i++) {
                tmp1.push(this.parentNodes[i]);
            }
            this.parentNodes=tmp1;
        }
		return tmp;
		
	}
	restoreRootFromLastInsertedNode(detached) {

	    var tmp=this.parentNodes.pop();
        var pn=[];
        pn.push(tmp);
        for(var i=0;i<this.parentNodes.length;i++) {
            pn.push(this.parentNodes[i]);
        }
        this.parentNodes=pn;
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
        this.count=0;
	}
	insertNode(node) {
		this.count++;
		if(this.root===null) {
			this.root=node;
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
        /*if (node.parent !== null && node.priority > node.parent.priority) {
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
            this.shiftNodeDown(node);
        }*/
        if (node.right !== null||node.left!==null) {
            if (node.right===null) {
                if(node.left.priority>node.priority) {
                    node.left.swapWithParent();
                }
            }
            else
            {
                if(node.left.priority>node.priority||
                    node.right.priority>node.priority) {
                    if(node.left.priority>node.priority&&
                        node.right.priority>node.priority) {
                        if(node.left.priority>node.right.priority) {
                            node.left.swapWithParent();
                        }
                        else {
                            node.right.swapWithParent();
                        }
                    }
                }
            }
            this.shiftNodeDown(node);
        }
        var tmp=node;
        while(tmp.parent!==null) {
            tmp=tmp.parent;
        }
        this.root=tmp;

		
	}
}
var h = new MaxHeap();

h.root = new Node(0, 3);
h.root.appendChild(new Node(1, 20));
h.root.appendChild(new Node(2, 7));
h.root.left.appendChild(new Node(3, 5));

/**
 3                        20
 /  \                      /  \
 20    7  - shift down ->   5    7
 /                          /
 5                          3
 **/

h.parentNodes = [
    h.root.left,
    h.root.right,
    h.root.left.left,
];

const newRoot = h.root.left;
const newDeepest = h.root;

h.shiftNodeDown(h.root);
console.log(h.root===newRoot);
console.log(h.root.left.left===newDeepest);
module.exports = MaxHeap;
