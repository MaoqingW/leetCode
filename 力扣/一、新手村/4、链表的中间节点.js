/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let mid = 0,total = 0;
  let origin = head;
  while (head && !isNaN(head.val)) {
     total++;
     head = head.next
  }
  if(total <= 1){
    return origin
  }
  mid = Math.floor(total / 2)
  while (origin && !isNaN(origin.val)) {
    mid--
    origin = origin.next
    if(mid === 0){
      return origin
    }
  }
};

var middleNode_2 = function (head) {
  const nodeArr = []
  while (head && !isNaN(head.val)) {
    nodeArr.push(head)
    head = head.next
 }
 return nodeArr[Math.floor(nodeArr.length / 2)]
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function ArrayToListNode(array) {
  let listNode = null;
  for(let index = array.length - 1;index >= 0; index--){
    listNode = new ListNode(array[index],listNode)
  }
  return listNode
}

function ListNodeToArray(listNode){

  let array = []
  while(listNode && !isNaN(listNode.val)){
    array.push(listNode.val);
    listNode = listNode.next;
  }
  return array
}

let a = [1,2,3,4,5]

// console.log(ArrayToListNode(a));
let head = ArrayToListNode(a)

console.log(middleNode_2(head));
