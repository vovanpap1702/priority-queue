class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.left=null;
		this.right=null;
		this.parent=null;

	}

	appendChild(node) {
		if (node.data<this.data) {
			this.left=node.data;
		}
		if (node.data>this.data) {
            this.right=node.data;
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

	}

	swapWithParent() {
		
	}
}

module.exports = Node;
