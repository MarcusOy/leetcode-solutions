/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    var longest = '';

    // Check palindrome for each index of s
    for(let x = 0; x < s.length; x++)
    {
        // Try both cases of an odd middle and
        // even middle, then return the bigger one.
        // We need to try both, because we won't know
        // how long a valid palindrome substr will be
        // to determine parity (even vs odd length).
        // Examples:                
        // Odd Middle  -> ba(b)ab
        // Even Middle -> b(aa)b
        let oddMiddle = extractPalindrome(s, x, x);
        let evenMiddle = extractPalindrome(s, x, x + 1);
        let bigger = oddMiddle.length > evenMiddle.length
            ? oddMiddle 
            : evenMiddle;

        // Store substring if it is longer than previous longest
        if (bigger.length > longest.length) longest = bigger;
    }

    return longest;
};

function extractPalindrome(s: string, left: number, right: number): string {
    // Shift working indexes when valid (and when index chars match)
    while(left >= 0 && right < s.length && s[left] == s[right])
    {
        left--;
        right++
    }
    // Extract substring from resulting left and right indexes
    return s.substring(left + 1, right);
}
// @lc code=end

longestPalindrome("babad")
longestPalindrome("ac")
