/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
    let prevRow = []
    for(let x = 0; x <= rowIndex; x++) {
        let row = new Array(x + 1).fill(1);

        if (x >= 2) {
            for(let y = 1; y < x; y++)
                row[y] = prevRow[y - 1] + prevRow[y]
        }
        prevRow = row;
    }

    return prevRow;
};
// @lc code=end

