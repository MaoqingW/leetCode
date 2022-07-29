/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i1 = 0, len = image.length; i1 < len; i1++) {
    const item = image[i1];
    const len2 = item.length;
    for (let i2 = 0, len3 = (len2 - 1) / 2; i2 <= len3; i2++) {
      if ((item[i2] === item[len2 - 1 - i2])) {
        const num = 1 - item[i2];
        item[i2] = item[len2 - 1 - i2] = num;
      }
    }
  }
  return image;
};

// const image = [
//   [1, 1, 0],
//   [1, 0, 1],
//   [0, 0, 0],
// ];
// const image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
// const image = [[1],[0],[1]]
const image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

const result = flipAndInvertImage(image);

console.log(result);
