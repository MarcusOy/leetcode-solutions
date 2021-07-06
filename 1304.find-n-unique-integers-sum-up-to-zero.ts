/*
 * @lc app=leetcode id=1304 lang=typescript
 *
 * [1304] Find N Unique Integers Sum up to Zero
 */

// @lc code=start
function sumZero(n: number): number[] {
    let nums = new Array(Math.floor(n/2))
        .fill(null)
        .flatMap((_, i) => [i + 1, -(i + 1)]);

    if (n % 2 != 0) nums.push(0);
    return nums;
};
// @lc code=end
