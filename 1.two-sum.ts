/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map = {}
    // Iterate through all numbers
    for(let x = 0; x < nums.length; x++)
    {
        // If the current number is a 
        // recorded diff, return indicies
        if (map.hasOwnProperty(nums[x]))
            return [map[nums[x]], x]

        // If not, record diff into map
        // with its index position
        const diff = target - nums[x]
        map[diff] = x
    }
    return [null, null]
};
// @lc code=end
