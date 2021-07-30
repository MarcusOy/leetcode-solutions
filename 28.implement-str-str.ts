/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {

    // Edge case for empty needle
    if (needle.length == 0) return 0;

    // For each character of haystack
    for(let x = 0; x < haystack.length; x++)
    {
        // Detect a potential match
        if(haystack[x] == needle[0])
        {
            let left: number = x;
            let right: number = x;
            for(let y = 0; y < needle.length; y++)
            {
                // Keep tracing the sub-sequence with needle
                if (haystack[right] == needle[y]) {
                    right++
                    continue;
                }

                // If the sequence if broken
                left = -1
                right = -1
                break;
            }

            // If found, return left ptr
            if (left >= 0) return left;
        }
    }

    // If we haven't found the needle 
    // in the haystack, return -1
    return -1;
};
// @lc code=end

