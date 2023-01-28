class ListNode {
  data: number;
  next:any;
  constructor(data:number) {
    this.data = data
    this.next = null
  }
}
class LinkedList {
  head?:ListNode;
  constructor(head?:ListNode) {
    this.head = head
  }
}

function sum(l1:LinkedList,l2:LinkedList){
  let carry = 0, sum = 0;
  let l3 = new LinkedList();
  let l1Pointer = l1.head , l2Pointer = l2.head, l3Pointer:any
  while(l1Pointer && l2Pointer){
    sum = l1Pointer.data + l2Pointer.data + carry;
    if(l3.head == null ){
      l3.head = new ListNode(sum % 10)
      l3Pointer = l3.head;
    }
    else{
      l3Pointer.next = new ListNode(sum % 10);
      l3Pointer = l3Pointer?.next
    }
    l2Pointer = l2Pointer.next;
    l1Pointer = l1Pointer.next;
    carry = Math.floor(sum /10) ;
  }
  if(l1Pointer){
    while(l1Pointer){
      const sum = l1Pointer.data + carry;
      l3Pointer.next = new ListNode(sum % 10);
      l3Pointer = l3Pointer.next;
      l1Pointer = l1Pointer.next;
      carry = Math.floor(sum /10)

    }
  }
  else{
    while(l2Pointer){
      const sum = l2Pointer.data + carry;
      l3Pointer.next = new ListNode(sum % 10);
      l3Pointer = l3Pointer.next
      l2Pointer = l2Pointer.next;
      carry = Math.floor(sum /10)

    }
  }
  if(carry != 0){
    l3Pointer.next = new ListNode(carry);

  }
  return l3
}
const n1 =new ListNode(2)
const n2 =new ListNode(4)
const n3 =new ListNode(3)
const n4 =new ListNode(5)
const n5 =new ListNode(6)
const n6 =new ListNode(4)
n1.next = n2;
n2.next = n3;
const l1 = new LinkedList(n1)
n4.next = n5;
n5.next = n6
const l2 = new LinkedList(n4)
console.log(sum(l1,l2));
const l3 = new LinkedList(new ListNode(0))
const l4 = new LinkedList(new ListNode(0))
console.log(sum(l3,l4));