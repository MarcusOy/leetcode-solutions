/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    // Regex breakdown:
    // []        -> is in range
    // ^         -> not
    // a-zA-Z0-9 -> selects a-z, A-Z, or 0-9
    s = s.replace(/[^a-zA-Z0-9]/g, '') 
        .toLowerCase();

    for(let x = 0; x < s.length / 2; x++)
    {
        if (s[x] != s[(s.length - 1) - x])
            return false;
    }

    return true;
};
// @lc code=end

isPalindrome("A man, a plan, a canal: Panama")
