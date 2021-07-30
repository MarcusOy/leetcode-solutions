/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    // CharMap containing operations on what
    // to pop off the top of stack when encountered
    // If empty string, just pop key, else, 
    // try pop value
    let charMap = {
        "(": "",
        ")": "(",
        "[": "",
        "]": "[",
        "{": "",
        "}": "{"
    };
    let stack: string[] = [];

    for(let x = 0; x < s.length; x++)
    {
        let char: string = s[x];

        // Discovering starting bracket
        if (charMap[char] == "")
        {
            // Pushing onto stack
            stack.unshift(char);
            continue;
        }

        // Discovering ending bracket
        if (stack[0] != undefined && charMap[char] == stack[0])
        {
            // Popping from stack
            stack.shift()
            continue;
        } 

        // We reach this return statement when we
        // find an ending bracket that does not have
        // a starting counterpart at the top of the
        // stack
        return false;
    }

    // Return true if stack has been popped empty
    return stack.length == 0;
};
// @lc code=end

isValid("()")
