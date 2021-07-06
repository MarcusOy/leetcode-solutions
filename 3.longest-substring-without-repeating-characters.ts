/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start

export interface IIndexable {
    [key: string]: any;
  }

function lengthOfLongestSubstring(s: string): number {
    let map: IIndexable = {};
    let num = 0;

    let x = 0;
    // Add starting char
    map[s.charAt(x)] = x;
    for(let y = 1; y <= s.length; y++)
    {
        // If the letter is already in the sequence
        // OR if we are at the end of the string
        if (map.hasOwnProperty(s.charAt(y)) || y == s.length)
        {
            // Get length of map
            let length = Object.entries(map).length;
            // Set length to num only if it is bigger
            if (length > num) num = length;
            // Reset window to index after 
            // problem char
            x = map[s.charAt(y)] + 1;
            y = x // will add plus one on next iteration
            // Clear map
            map = {};
            // Add starting char
            map[s.charAt(x)] = x;
            continue;
        }

        // Use window end to log char into map
        map[s.charAt(y)] = y;
    }
    return num;
};
// @lc code=end

lengthOfLongestSubstring("pwwkew")

