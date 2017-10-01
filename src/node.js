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
		}
		else if (this.left!==null&&this.right===null) {
            this.right=node;
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
