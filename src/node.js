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
	appendParent(node)
	{


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
        if(this.parent!==null&&this!==null) {
        	var t=this;
        	var p=this.parent;
            var pr=this.parent.right;
            var pl=this.parent.left;
            var l=this.left;
            var r=this.right;
           	t.parent=p.parent;
           	if (t.priority===pl.priority&&t.data==pl.data) {
           		pl=p;
			}
			if (t.priority===pr.priority&&t.data==pr.data) {
           		pr=p;
			}
            p.removeChild(pr);
            p.removeChild(pl);
            t.removeChild(r);
            t.removeChild(l);
            t.appendChild(pl);
            t.appendChild(pr);
            p.appendChild(l);
            p.appendChild(r);
        	/*/!*const pr=this.right;
        	const pl=this.left;
            const p=this.parent;*!/
           /!* const pp=this.parent.parent;
            const cl=this.left;
            const cr=this.right;*!/
            this.parent.data=this.data;
            this.parent.priority=this.priority;
            this.parent.removeChild(this);
            //this.parent.left=this.left;//good
           // this.parent.right=this.right;//good
            this.parent.appendChild(p);
            p.left=pr;
            p.right=pl;
*/
		}
		
	}
}
const node = new Node(15, 42);
node.swapWithParent();

const parent = new Node(15, 42);
const child = new Node(42, 15);

parent.appendChild(child);
child.swapWithParent();

console.log(parent.parent===child);
/*


it('updates child.parent', () => {
    const parentOfParent = new Node(100, 500);
const parent = new Node(15, 42);
const child = new Node(42, 15);

parentOfParent.appendChild(parent);
parent.appendChild(child);
child.swapWithParent();

expect(child.parent).to.equal(parentOfParent);
});

it('updates parent.child.parent', () => {
    const root = new Node(1, 2);
const left = new Node(3, 4);
const right = new Node(5, 6);

root.appendChild(left);
root.appendChild(right);

right.swapWithParent();

expect(left.parent).to.equal(right);
})

it('updates children of node and parent node', () => {
    const root = new Node(42, 15);
const left = new Node(13, 42);
const right = new Node(0, 1);
const childOfLeft = new Node(0, 15);

root.appendChild(left);
root.appendChild(right);
left.appendChild(childOfLeft);

left.swapWithParent();

expect(left.right).to.equal(right);
expect(left.left).to.equal(root);
expect(root.left).to.equal(childOfLeft);
});

const root = new Node(15, 42);
const left = new Node(42, 15);
const right = new Node(13, 42);
const childOfLeft = new Node(13, 34);
const childOfRight = new Node(0, 1);

root.appendChild(left);
root.appendChild(right);
left.appendChild(childOfLeft);
right.appendChild(childOfRight);

childOfLeft.swapWithParent();
childOfRight.swapWithParent();

expect(root.left).to.equal(childOfLeft);
expect(root.right).to.equal(childOfRight);

*/
module.exports = Node;
