/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
function firstUniqChar(s: string): number {
    // Store frequency of chars in hash map
    let map: Map<string, number> = new Map();

    // Iterate over string and count frequencies
    // of characters
    for(let x = 0; x < s.length; x++)
    {
        if (map.has(s[x]))
        {
            //@ts-ignore
            map.set(s[x], map.get(s[x]) + 1);
            continue;
        }

        map.set(s[x], 1);
    }

    // Get first entry of hash map that have a value
    // of 1, then get the indexOf the key (which is 
    // the character)
    for(let entry of map.entries())
        if(entry[1] == 1) return s.indexOf(entry[0]);

    // Return -1 if not found
    return -1;
};
// @lc code=end

firstUniqChar("leetcode")