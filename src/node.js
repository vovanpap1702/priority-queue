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
        if(this.parent!==null&&this!==null) {
        	if(this.parent.parent!==null)
			{
				if(this.parent.parent.left!==null) {
                    if(this.parent.parent.left.left!==null) {
                    	if(this.parent.parent.left.left.data===this.data&&
                            this.parent.parent.left.left.priority===this.priority) {
                    		this.parent.parent.left=this;
						}

                    }
                    if(this.parent.parent.left.right!==null) {
                        if(this.parent.parent.left.right.data===this.data&&
                            this.parent.parent.left.right.priority===this.priority) {
                            this.parent.parent.left=this;
                        }

                    }
				}
				if(this.parent.parent.right!==null) {
                    if(this.parent.parent.right.left!==null) {
                        if(this.parent.parent.right.left.data===this.data&&
                            this.parent.parent.right.left.priority===this.priority) {
                            this.parent.parent.right=this;
                        }
                    }
                    if(this.parent.parent.right.right!==null) {
                        if(this.parent.parent.right.right.data===this.data&&
                            this.parent.parent.right.right.priority===this.priority) {
                            this.parent.parent.right=this;
                        }
                    }

				}
			}
        	var t=this;
        	var p=this.parent;
            var pr=this.parent.right;
            var pl=this.parent.left;
            var l=this.left;
            var r=this.right;
           	t.parent=p.parent;
			if(pr!==null) {
                if (p.left!==null&&pr.data === p.left.data &&
                    pr.priority === p.left.priority) {
                    p.left.parent = null;
                    p.left = null;
                }
                else if (p.right!==null&&pr.data === p.right.data &&
                    pr.priority === p.right.priority) {
                    p.right.parent = null;
                    p.right = null;
                }
            }
            if(pl!==null) {
                if (p.left!==null&&pl.data === p.left.data &&
                    pl.priority === p.left.priority) {
                    p.left.parent = null;
                    p.left = null;
                }
                else if (p.right!==null&&pl.data === p.right.data &&
                    pl.priority === p.right.priority) {
                    p.right.parent = null;
                    p.right = null;
                }
            }
            if(r!==null) {
                if (t.left!==null&&r.data === t.left.data &&
                    r.priority === t.left.priority) {
                    t.left.parent = null;
                    t.left = null;
                }
                else if (t.right!==null&&r.data === t.right.data &&
                    r.priority === t.right.priority) {
                    t.right.parent = null;
                    t.right = null;
                }
            }
            if(l!==null) {
                if (t.left!==null&&l.data === t.left.data &&
                    l.priority === t.left.priority) {
                    t.left.parent = null;
                    t.left = null;
                }
                else if (t.right!==null&&l.data === t.right.data &&
                    l.priority === t.right.priority) {
                    t.right.parent = null;
                    t.right = null;
                }
            }
            if ((pl!==null)&&(t.priority===pl.priority&&t.data==pl.data)) {
               t.parent=p.parent;
                pl=p;
            }
            if ((pr!==null)&&(t.priority===pr.priority&&t.data==pr.data)) {
                t.parent=p.parent;
				pr=p;
            }
            t.left=pl;
			if(t.left!==null)
				t.left.parent=t;
			t.right=pr;
            if(t.right!==null)
				t.right.parent=t;
			p.left=l;
			if(p.left!==null)
				p.left.parent=p;
			p.right=r;
			if(p.right!==null)
				p.right.parent=p;
            }

		}

}
module.exports = Node;
