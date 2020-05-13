class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  
  peek() {  //what is last item 
    return this.top;
  }
  push(value) {
    let newNode = new Node(value);
    newNode.next=this.top;
    this.top=newNode;
    if(this.length===0){
      this.bottom=newNode;
    }
    this.length++;
  console.log(newNode);
  }
  pop() {
    

    this.top=this.top.next;
    this.length--;
    // delete this.top;
    return this.top+''+this.length;
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push("google")
myStack.push("udemy")
myStack.push("Discord")
// myStack.pop();
// myStack.pop();
//Discord
//udemy
//google






//Discord
//Udemy
//google
