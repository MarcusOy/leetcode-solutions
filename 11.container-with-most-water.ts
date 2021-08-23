/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {

    if (height.length < 2) return 0;

    let maxArea = 0;

    let ptr1 = 0;
    let ptr2 = height.length - 1;

    while (ptr1 < ptr2)
    {
        // Calculate area (minimum of both heights * width)
        let area = Math.min(height[ptr1], height[ptr2]) * (ptr2 - ptr1)
        // Set new max area if applicable
        if (area > maxArea) maxArea = area;

        // Move whichever pointer has the lesser height
        if (height[ptr1] < height[ptr2])
            ptr1++;
        else
            ptr2--;
    }

    return maxArea;
};
// @lc code=end

