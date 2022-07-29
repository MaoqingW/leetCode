/**
 * @param {string} target
 * @return {string}
 */

// 记录一下思路
// 单纯的字符串的话，是无法判断前后位置或者大小关系的（除非挨个手动添加属性），所以通过ascII码值来判断字符的大小关系，
// 也就可以推算出字符的位置关系，此时，再根据ascII之间的差值关系判断字符位于其应在位置的那个方向。
// 值得注意的是，仅一个差值的话是不足以用来判断换行的，还需要下标，借助这两个值既可以准确的判断何时换行
// 还有一个比较坑的地方，就是最后一行的"z",因为最后一行只有这一个字母，所以换行优先的策略在这里会报错，所以加了一个特别的判断，
// 就是当要寻找的字母是 "z" 时，就先移动到最左边，再依次往下走就可以了。

var alphabetBoardPath = function (target) {
    const board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"];
    let x = 0, y = 0;
    let res = '';
    for (const str of target) {
        while (str.charCodeAt(0) !== board[x][y].charCodeAt(0)) {
            const diff = str.charCodeAt(0) - board[x][y].charCodeAt(0)
            if(str === 'z' && y > 0){
                y--;
                res += 'L';
            }else if (diff >= 5) {
                x++;
                res += 'D';
            } else if (diff <= -5) {
                x--;
                res += 'U';
            } else if (diff > 0) {
                if (y + diff >= 5) {
                    x++;
                    res += 'D'
                } else {
                    y++;
                    res += 'R'
                }
            } else if (diff < 0) {
                if (y + diff < 0) {
                    x--;
                    res += 'U';
                } else {
                    y--;
                    res += 'L';
                }
            }
        }
        res += '!'
    }
    return res;
};
console.log(alphabetBoardPath('buzz'));