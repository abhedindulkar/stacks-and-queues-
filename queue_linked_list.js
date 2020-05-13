class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.last;
  }
  enqueue(value){
    let newNode=new Node();
    newNode.value=value
    if(this.length===0){
      this.last=newNode;
      this.first=this.last;
      this.length++;
    }else{
       this.last.next=newNode;
       this.last=newNode;
       this.length++;
    }
  }
  dequeue(){
    // let holding=this.first
    if(this.length===1){
      this.first=this.last
    }
    this.first=this.first.next
    // delete holding;
    this.length--
    return this;
  }
  //isEmpty;
}

const myQueue = new Queue();
myQueue.peek()
myQueue.enqueue("joy")
myQueue.enqueue("matt")
myQueue.enqueue("pavel")
myQueue.dequeue()
// myQueue.peek()


//Joy
//Matt
//Pavel
//Samir

