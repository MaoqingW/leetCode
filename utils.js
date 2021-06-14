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
