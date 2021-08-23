/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {

    // Edge cases
    if (nums.length < 3) return [];

    let result: number[][] = [];
    // Sort nums in-place to allow for two pointer
    // solution to work
    nums.sort();

    // For each index of nums
    for(let x = 0; x < nums.length; x++)
    {
        // Prevents duplicate numbers that are next to
        // each other, removing duplicate solution sets
        if (x != 0 && nums[x] == nums[x - 1]) continue;

        // Create two pointers from the current 
        // index to the end of nums
        let ptr1 = x;
        let ptr2 = nums.length - 1;
    
        while(ptr1 < ptr2) {
            // Shorthand array descructure variables
            let set = [nums[x], nums[ptr1], nums[ptr2]]

            // Sum of three selected numbers
            let sum = set.reduce((a, b) => a + b);
            
            // If negated sum is found in array, add all three
            // numbers to result set
            if (sum == 0) {
                result.push(set);
                // Prevents duplicate numbers that are next to
                // each other, removing duplicate solution sets
                while (ptr1 < ptr2 && nums[ptr1] == nums[ptr1 - 1]) ptr1++;
            } else if (sum < 0)
                ptr1++;
            else
                ptr2--;
    
            // Move pointer based on sum of all
            // involved numbers
            if (sum < 0)
                ptr1++
            else
                ptr2--;
        }
    }
    

    return result;
};
// @lc code=end

