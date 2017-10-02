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
			this.left=null;
		}
        else if(node.data===this.right.data&&
            node.priority===this.right.priority) {
            this.right=null;
        }
        else {
			throw new Error();
		}

	}

	remove() {
		this.parent=null;

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
