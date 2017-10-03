class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.left=null;
		this.right=null;
		this.parent=null;

	}

	appendChild(node) {
		if (this.left===null) {
			this.left=node;
			this.left.parent=this;
		}
		else if (this.left!==null&&this.right===null) {
            this.right=node;
            this.right.parent=this;
		}

	}

	removeChild(node) {
		if(node.data===this.left.data&&
			node.priority===this.left.priority) {
			this.left.parent=null;
			this.left=null;
		}
        else if(node.data===this.right.data&&
            node.priority===this.right.priority) {
			this.right.parent=null;
            this.right=null;
        }
        else {
			throw new Error();
		}

	}

	remove() {
		if(this.parent!==null) {
            this.parent.removeChild(this);
           	this.parent=null;
        }

	}

	swapWithParent() {
        if(this.parent!==null) {
        	var tmp=this;
        	this.data=this.parent.data;
        	this.priority=this.parent.priority
        	this.parent=tmp;
        }
		
	}
}

module.exports = Node;
