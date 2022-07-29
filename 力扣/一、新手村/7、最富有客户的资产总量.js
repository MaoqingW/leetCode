/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  const totals = accounts.map((item) =>
    item.reduce((prev, curr) => curr + prev, 0)
  );
  return Math.max(...totals);
};
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
