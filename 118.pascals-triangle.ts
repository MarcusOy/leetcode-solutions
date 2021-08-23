/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
    let result: number[][] = [];
    for(let x = 0; x < numRows; x++) {
        let row = []
        // Set the first and last 
        // indicies as 1
        row[0] = 1;
        row[x] = 1;

        // If we are past rows 1 and 2, 
        // start adding middle numbers
        if (x >= 2) {
            // Get previous row
            let prevRow = result[result.length - 1];
            // For each middle number, add values from
            // the previous row
            for(let y = 1; y < x; y++)
                row[y] = prevRow[y - 1] + prevRow[y];
        }

        // Add new row to resulting triangle
        result.push(row);
    }

    return result;
};
// @lc code=end

generate(5)