/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    const MAX_INT = Math.pow(2, 31) - 1;
    const MIN_INT = Math.pow(2, 31) * -1;

    let digits: number[] = []
    let isNegative: boolean = false;
    let isReadingDigits: boolean = false;

    // Iterate over each char in string s
    for(let x = 0; x < s.length; x++)
    {
        let char = s[x]

        // If none of the if statements above are triggered,
        // assume we are reading digits
        if (new RegExp(/[0-9]/g).test(char))
            isReadingDigits = true;

        // If already reading digits
        if (isReadingDigits)
        {
            if (new RegExp(/[^0-9]/g).test(char))
                break;

            digits.push(charToNumber(char))
            continue;
        }

        // If not, check for other cases mentioned by spec
        // Continue on whitespace char
        if (char == ' ') 
            continue;
        
        // Set parity on + or - char and continue
        if (new RegExp(/[+-]/g).test(char)) {
            isNegative = char == "-";
            isReadingDigits = true;
            continue;
        }

        // Break loop when encountering non numbers before digits
        if (new RegExp(/[^0-9]/g).test(char))
            break;
    }

    // If no digits were collected
    if (digits.length == 0) return 0;

    // Reconstruct number
    let total: number = 0;
    digits.reverse().map((n, i) => 
        total += n * (Math.pow(10, i))
    )

    // Multiple by parity bit
    total *= isNegative ? -1 : 1
    
    // Clamp number to Int32 range
    if (total >= MAX_INT)
        total = MAX_INT;
    if (total <= MIN_INT)
        total = MIN_INT;

    return total;
};

function charToNumber(char: string): number {
    return char.charCodeAt(0) - 48
}
// @lc code=end

