/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    // Hashmap to convert numerals into integers
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    // Getting rid of subtraction cases
    s = s.replace('IV', 'IIII')
        .replace('IX', 'VIIII')
        .replace('XL', 'XXXX')
        .replace('XC', 'LXXXX')
        .replace('CD', 'CCCC')
        .replace('CM', 'DCCCC')

    // Get "char" array from input string
    const input: string[] = Array.from(s);

    // Sums every converted numeral
    let value: number = 0;
    for(let x = 0; x < input.length; x++)
        value += romanMap[input[x]]
    return value;
};
// @lc code=end

