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
  return isPalindromeArray(ListNodeToArray(head))
};

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
  console.log(array);
  return array
}

function isPalindromeArray(array) {
  let isPalindrome = true;
  for(let index = 0,len = Math.floor((array.length + 1) / 2);index < len; index ++){
    if(array[index] !== array[array.length - 1 - index]){
      isPalindrome = false;
      break
    }
  }
  return isPalindrome;
}
let array = [1,0,0]
let listNode = ArrayToListNode(array)

let testValue = isPalindrome(listNode)
console.log(testValue);




// console.log(ArrayToListNode([1,2]));


function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// const test = isPalindrome([1, 2]);
// const test = isPalindrome([1,2,3,4,2,1])
// console.log(test);
