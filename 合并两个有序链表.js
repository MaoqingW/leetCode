// import {ListNode,generateListNode,parseListNode} from './utils'

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
 var mergeTwoLists = function(l1, l2) {
   let result = new ListNode()
   let loc = result;
   while((l1 && l1.val) || (l2 && l2.val)){
    if(l1 && l1.val && l2 && l2.val){
      if(l1.val > l2.val){
        loc.val = l2.val
        loc.next = new ListNode()
        loc = loc.next;
        loc.val = l1.val
      }else if(l1.val < l2.val){
        loc.val = l1.val
        loc.next = new ListNode()
        loc = loc.next
        loc.val = l2.val
      }else{
        loc.val = l1.val
        loc.next = new ListNode()
        loc = loc.next;
        loc.val = l1.val
      }
      // if(l1.next || l2.next){
      //   loc.next = new ListNode()
      // }
    }else if((l1 && l1.val) && (!l2 || !l2.val)){
      loc.val = l1.val
      // if(l1.next){
      //   loc.next = new ListNode()
      // }

    }else if((l2 && l2.val) && (!l1 || !l1.val)){
      loc.val = l2.val
      // if(l2.next){
      //   loc.next = new ListNode();
      // }
    }
    if(l1 && l1.next && l2 && l2.next){
      l1 = l1.next;
      l2 = l2.next;
      loc.next = new ListNode()
      loc = loc.next
    }else if(l1 && l1.val){
      l1 = l1.next
      loc.next = new ListNode()
      loc = loc.next
    }else if(l2 && l2.val){
      l2 = l2.next
      loc.next = new ListNode()
      loc = loc.next
    }
  }
  return result
};


const l1 = generateListNode([1])
const l2 = generateListNode([4])

console.log(parseListNode(mergeTwoLists(l1,l2)));






function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function generateListNode(list) {
  let result = new ListNode();
  let loc = result;
  for (let index = 0, len = list.length; index < len; index++) {
    loc.val = list[index];
    if (index < len - 1) {
      loc.next = new ListNode();
    }
    loc = loc.next;
  }
  return result;
}

function parseListNode(listNode) {
  let result = []
  while (listNode && !isNaN(listNode.val)) {
    result.push(listNode.val);
    listNode = listNode.next;
  }
  return result
}
