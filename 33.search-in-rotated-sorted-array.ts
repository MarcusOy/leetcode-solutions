/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
    // Shortcuts
    if (nums.length <= 0) return -1;
    if (nums.length == 1)
        return nums[0] == target ? 0 : -1;

    // Find pivot point
    let pivot = -1;
    for(let x = 0; x < nums.length - 1; x++) {
        if (nums[x] > nums[x + 1]) {
            pivot = x + 1;
            break;
        }
    }

    // If no pivot found, use binary search on
    // whole array
    if (pivot == -1) 
        return binarySearch(nums, 0, nums.length - 1, target);

    // If the target is less than the first value 
    // of array, use binary search on array past pivot
    if (target < nums[0])
        return binarySearch(nums, pivot, nums.length - 1, target);

    // If not, use binary serach on array up until the pivot
    return binarySearch(nums, 0, pivot, target);
};

function binarySearch(nums: number[], left: number, right: number, target: number) {

    // Shortcuts
    if (nums.length <= 0) return -1;
    if (nums.length == 1)
        return nums[0] == target ? 0 : -1;

    while(left <= right) {
        let middle = Math.floor((left + (right)) / 2);

        // If middle's value is the target,
        // return middle index
        if (nums[middle] == target)
            return middle;
        
        // Adjust binary search window
        if (nums[middle] < target)
            left = middle + 1;
        else
            right = middle - 1;
    }
    // If element is not found in binary search
    return -1;
}
// @lc code=end


search([3,1], 3)