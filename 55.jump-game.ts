/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start

let memo

function canJump(nums: number[]): boolean {
    let maxReach = 0;
    let ptr = 0;

    // Traverse each number in nums
    for(ptr; ptr < nums.length; ptr++)
    {
        // If our max reach pointer lags behind our main pointer,
        // then we must have hit an index that contains the value 0
        if (ptr > maxReach) break;

        // Record our new maximum reach
        maxReach = Math.max(maxReach, ptr + nums[ptr]);
    }

    // If our main pointer has reached the last index
    if (ptr == nums.length) return true;

    // Otherwise, return false
    return false;
};

// @lc code=end

let asdf = canJump([2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6])


// Slow, expensive recursion
//
// function canJump(nums: number[]): boolean {
//     // If at last index, return true
//     if (nums.length == 1) return true;

//     // Calculating valid steps by using the number
//     // in the starting index
//     for(let x = nums[0]; x > 0; x--)
//     {
//         // Reframe nums array so that the starting
//         // index is our "current" index
//         let result = canJump(nums.slice(x))
//         // Only return if result is true
//         if (result) return result;
//     }

//     // If none of the resulting paths return true,
//     // then return false
//     return false;
// };