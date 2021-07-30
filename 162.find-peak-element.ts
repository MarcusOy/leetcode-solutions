/*
 * @lc app=leetcode id=162 lang=typescript
 *
 * [162] Find Peak Element
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
    for(let x = 1; x < nums.length - 1; x++)
    {
        let result = expandIndex(nums, x);
        if (result) return x;
    }
    
    return nums.indexOf(Math.max(...nums));
};

function expandIndex(nums: number[], i: number): boolean {
    return nums[i] > nums[i - 1] 
        && nums[i] > nums[i + 1] 
}
// @lc code=end

