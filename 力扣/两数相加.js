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
// 数组
// var addTwoNumbers = function (l1, l2) {
//   let long = l1.length >= l2.length ? l1:l2;
//   let short = l1.length < l2.length ? l1:l2;
//   let index = 0;
//   while (index < long.length) {
//     if (!isNaN(long[index]) && !isNaN(short[index])) {
//       const sum = long[index] + short[index];
//       if (sum >= 10) {
//         long[index] = sum % 10;
//         if (isNaN(long[index + 1])) {
//           long[index + 1] = 1;
//         } else {
//           long[index + 1]++;
//         }
//       }else{
//         long[index] = sum;
//       }
//     } else {
//       if (long[index] >= 10) {
//         long[index] = long[index] % 10;
//         if (isNaN(long[index + 1])) {
//           long[index + 1] = 1;
//         } else {
//           long[index + 1]++;
//         }
//       }
//     }
//     index++;
//   }
//   return long
// };

// const l1 = [2,4,3]
// const l2 = [5,6,4]

// const result = addTwoNumbers(l2,l1)
// console.log(result);

// 链表
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode();
  let loc = result;
  while ((l1 && !isNaN(l1.val)) || (l2 && !isNaN(l2.val))) {
    const sum = (l1.val || 0) + (l2.val || 0) + loc.val;
    if (sum >= 10) {
      loc.val = sum % 10;
      loc.next = new ListNode(1);
    } else {
      loc.val = sum;
    }
    if ((l1.next || l2.next) && !loc.next) {
      loc.next = new ListNode();
    }

    l1 = l1.next || {};
    l2 = l2.next || {};
    loc = loc.next;
  }
  return result;
};

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
const l1 = generateListNode([6,4,5,0,4,4,9,4,1]);
const l2 = generateListNode([3,8,8,0,3,0,1,4,8]);

const result = addTwoNumbers(l1, l2);

const parseResult = parseListNode(result)
console.log('parseResult',parseResult);

