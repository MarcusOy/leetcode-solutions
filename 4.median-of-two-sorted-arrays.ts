/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Merge two sorted arrays
    let sorted = mergeSortedArrays(nums1, nums2)

    // Return median of new sorted array
    if (sorted.length % 2 == 0) { // if even 
        // take average of both middle numbers
        return (sorted[sorted.length / 2] + sorted[(sorted.length / 2) - 1]) / 2;
    } else { // if odd
        // grab middle number
        return sorted[Math.ceil(sorted.length / 2) - 1]; 
    }
};

function mergeSortedArrays(nums1: number[], nums2: number[]): number[] {
    let sorted: Array<number> = [];
    let x: number = 0;
    let y: number = 0;

    // Shortcut checks
    if (nums1.length <= 0 && nums2.length <= 0) return [];
    if (nums2.length <= 0) return nums1;
    if (nums1.length <= 0) return nums2;

    for(let i = 0; i < nums1.length + nums2.length; i++)
    {
        let n1: number = nums1[x]
        let n2: number = nums2[y]

        // edge case to break out of loop
        if (n1 == undefined && n2 == undefined) break;

        // pick smaller number of the two (or from
        // the array that still has elements left)
        if (n2 == undefined || n1 < n2)
        {
            sorted[i] = n1;
            x++;
        } else if (n1 == undefined || n2 <= n1)
        {
            sorted[i] = n2;
            y++;
        }
    }
    return sorted;
}
// @lc code=end

findMedianSortedArrays([1, 2], [3, 4])
