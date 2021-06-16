// import {ListNode,generateListNode,parseListNode} from './utils'
const {ListNode,generateListNode,parseListNode}  = require('./utils')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if(!l1 && !l2){
    return 
  }
  let result = new ListNode();
  let loc = result;
  while ((l1 && !isNaN(l1.val)) || (l2 && !isNaN(l2.val))) {
    if (l1 && !isNaN(l1.val) && l2 && !isNaN(l2.val)) {
      if (l1.val > l2.val) {
        loc.val = l2.val;
        l2 = l2.next;
      } else if (l1.val < l2.val) {
        loc.val = l1.val;
        l1 = l1.next;
      } else {
        loc.val = l1.val;
        loc.next = new ListNode();
        loc = loc.next;
        loc.val = l1.val;

        l1 = l1.next;
        l2 = l2.next;
      }
    } else if (l1 && !isNaN(l1.val) && (!l2 || isNaN(l2.val))) {
      loc.val = l1.val;
      l1 = l1.next;
    } else if (l2 && !isNaN(l2.val) && (!l1 || isNaN(l1.val))) {
      loc.val = l2.val;
      l2 = l2.next;
    } else {
      break;
    }
    if(l1 || l2){
      loc.next = new ListNode()
      loc = loc.next
    }
  }
  return result;
};

const l1 = generateListNode([]);
const l2 = generateListNode([]);


console.log(parseListNode(mergeTwoLists(l1, l2)));

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// function generateListNode(list) {
//   let result = new ListNode();
//   let loc = result;
//   for (let index = 0, len = list.length; index < len; index++) {
//     loc.val = list[index];
//     if (index < len - 1) {
//       loc.next = new ListNode();
//     }
//     loc = loc.next;
//   }
//   return result;
// }

// function parseListNode(listNode) {
//   let result = [];
//   while (listNode && !isNaN(listNode.val)) {
//     result.push(listNode.val);
//     listNode = listNode.next;
//   }
//   return result;
// }
