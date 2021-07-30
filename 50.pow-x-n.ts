/*
 * @lc app=leetcode id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
    // if exponent is 0, always return 1
    if (n == 0) return 1;

    // if root is 1, assume result based on polarity
    if (Math.abs(x) == 1) 
        if(x < 0)
            return (n % 2 == 0 ? x * x : x);
        else
            return x;

    // multiply itself n times
    let result: number = 1;
    for(let i = 0; i < Math.abs(n); i ++)
        result *= x;    

    // if the exponent was negative, return its 'compliment'
    if (n < 0) return 1 / result;
    return result;
};
// @lc code=end

myPow(1, 2147483647)
console.log('done');
