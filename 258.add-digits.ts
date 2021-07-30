/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
    var sum: number = 0;
    num.toString().split('').map(c => {
        sum += parseInt(c)
    })
    if (sum < 10) return sum;

    return addDigits(sum);
};
// @lc code=end

addDigits(38);
console.log('done')