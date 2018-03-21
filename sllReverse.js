// write an iterative and recursive function to reverse a singley linked list

// singley linked list constructor
const SLL = () => {
  this.head = null;
}

// node constructor
const Node = (val) => {
  this.val = val;
  this.next = null;
}

// iterative solution
SLL.prototype.itReverse = () => {
  // check to see if head and head.next exist
  if (!this.head || !this.head.next) {
    return;
  }
  // initiate current node and next node variables
  let curN = this.head;
  let nextN = cur.next;
  // as long as next node .next exists
  while (nextN.next) {
    // swap pointer directions
    let temp = nextN.next;
    nextN.next = curN;
    curN = nextN;
    nextN = temp;
  }
  // swap pointer directions and reasign this.head
  nextN.next = curN;
  this.head.next = null;
  this.head = nextN;
}

// recursive solution
SLL.prototype.reReverse = (prev, cur = this.head) => {
  // if current node .next points to null
  if (!cur.next) {
    // reasign head pointer and reverse current node pointer direction
    this.head = cur;
    cur.next = prev;
    return;
  }
  // recurse to end of list 
  reReverse(cur, cur.next);
  // if previous node pointer doesnt exist set current node .next pointer to null
  if (!prev) {
    cur.next = null;
    return;
  }
  // swap current node pointer direction
  cur.next = prev;
  return;
}