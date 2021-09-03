/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
// 最简单方法：遍历链表，将所有值存在一个数组中，最后返回reverse()之后的数组即可。
var reversePrint = function (head) {
  let result = []
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result.reverse();
};

// 第二种解法：使用递归。这种方式无法仅通过函数本身保留住结果数组，只能一个个打印出来。
var reversePrint2 = function (head) {
  if(head !== null){
    if(head.next !== null){
      reversePrint2(head.next)
    }
  }
  console.log(head.val);
};




function ListNode(val) {
  this.val = val;
  this.next = null;
}

let head = new ListNode(1);
head.next = new ListNode(3);
head.next.next = new ListNode(2);

const res = reversePrint2(head);

console.log(res);
