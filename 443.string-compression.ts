/*
 * @lc app=leetcode id=443 lang=typescript
 *
 * [443] String Compression
 */

// @lc code=start

type CompressionUnit =  {
    char?: string;
    num?: number;
};

function compress(chars: string[]): number {
    // Store list of compression units
    // and the current working unit
    var compressed: CompressionUnit[] = []
    var currentCompressed: CompressionUnit = {};
    for(let x = 0; x < chars.length; x++)
    {
        // If current char is not of current compression unit
        // or if num is about to hit 10
        if (currentCompressed == undefined
                || chars[x] != currentCompressed.char) {
            if (currentCompressed.char) compressed.push(currentCompressed);
            currentCompressed = {
                char: chars[x],
                num: 1
            }
            continue;
        }

        // Add to current char's num
        if (currentCompressed)
            //@ts-ignore
            currentCompressed.num++;
    }
    // Add that last compressed unit
    compressed.push(currentCompressed)

    // Turn original chars array into 
    // compressed array in a mutable way
    chars.length = 0; // mutable array clear
    Array.prototype.push.apply(chars, compressed.flatMap(u => { 
        if (u.num! > 1)
            return [u.char!, ...u.num!.toString().split('')]
        return [u.char!]
    }));

    // Return length of new chars array
    return chars.length;
};
// @lc code=end
// var asdf = ["a","a","b","b","c","c","c"]
var asdf = ["a","a","a","b","b","a","a"]
compress(asdf);

console.log('done')
