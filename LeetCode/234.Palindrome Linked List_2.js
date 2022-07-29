/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let copyNode = reverseListNode(head)
  while (head && !isNaN(head.val)) {
    if(copyNode.val !== head.val){
      return false;
    }
    copyNode = copyNode.next;
    head = head.next;
  }
  return true
};

function reverseListNode(head) {
  let copyNode = null
  while(head && !isNaN(head.val)){
    copyNode = new ListNode(head.val, copyNode)
    head = head.next
  }
  return copyNode
}

function ArrayToListNode(array) {
  let listNode = null;
  for(let index = array.length - 1;index >= 0; index--){
    listNode = new ListNode(array[index],listNode)
  }
  return listNode
}

let arr = [1,2,3,2,1]
let listNode = ArrayToListNode(arr)
// let reverseNode = reverseListNode(listNode)
// console.log(listNode);
// console.log(reverseNode);

const result = isPalindrome(listNode)
console.log(result);



function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
