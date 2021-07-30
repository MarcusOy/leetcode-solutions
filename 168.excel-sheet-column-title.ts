/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
function convertToTitle(columnNumber: number): string {
    // We are essentially converting base 10 to base 26,
    // but then using the entire alphabet instead of numerics
    const ALPHA_OFFSET = 65; // ascii code for 'A'
    const BASE = 26;
    let output: string = "";

    // Repeat until our working number reaches zero or below
    while(columnNumber > 0)
    {
        // The remainder tells us which digit to render
        // from range 1-26 -> A-Z
        let remainder = (columnNumber - 1) % BASE;
        // The division gives us our next "digits place"
        // to work with
        let division = (columnNumber - 1) / BASE

        // remainder or division could reach negatives, which
        // could add an @ char unintentionally
        if (remainder < 0 || division < 0)
            break;

        // Get our char using ascii codes and prepend it to output
        output = String.fromCharCode(ALPHA_OFFSET + remainder) + output;

        // Set working number
        columnNumber = division;
    }

    return output;
};
// @lc code=end

convertToTitle(1)
