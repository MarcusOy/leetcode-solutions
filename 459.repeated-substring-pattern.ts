/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
    // For each character in string s
    for(let x = 1; x < s.length; x++)
    {
        // Extract substr with increasing len
        // on every iteration 
        let substr = s.substr(0, x);
        let result = isPatternValid(s, substr)
        
        if (result) return true;
    }
    return false;
};

function isPatternValid(s: string, substr: string): boolean {
    let len = substr.length;

    // Check extracted substr with evenly divided
    // substrs matching length len
    for(let y = 0; y < s.length; y += len)
    {
        if (s.substr(y, len) != substr)
            return false;
    }
    return true;
}
// @lc code=end

repeatedSubstringPattern("ab")