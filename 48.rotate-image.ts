/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
// function rotate(matrix: number[][]): void {
//     if (matrix.length <= 0) return;

//     let original: number[][] = [];

//     original = matrix.slice();

//     // y -> columns
//     // x -> rows

//     // For each column of matrix
//     for(let y = 0; y < matrix.length; y++)
//     {
//         let row: number[] = [];
//         // For each row of column
//         for(let x = matrix[y].length - 1; x >= 0; x--)
//             row.push(original[x][y]);

//         matrix[y] = row;
//     }
// };

function rotate(matrix: number[][]): void {
    // Step 1: Make submatrix, starting with
    // whole matrix, then removing the outer
    // layer 
    for(let x = 0; x < matrix.length / 2; x++)
    {
        let n = matrix[x].length - x

        for(let y = x; y < n - 1; y++)
        {
            let offset = y - x;
            // Get values of four corners 
            // of current matrix going clockwise
            let tl = matrix[x][y]
            let tr = matrix[x + offset][n - 1]
            let br = matrix[n - 1][n - 1 - offset]
            let bl = matrix[n - 1 - offset][x]

            // Swap values of four corners
            // going clockwise
            matrix[x][y] = bl;
            matrix[x + offset][n - 1] = tl;
            matrix[n - 1][n - 1 - offset] = tr;
            matrix[n - 1 - offset][x] = br;
        }
    }
}
// @lc code=end

// rotate([[1,2,3],[4,5,6],[7,8,9]])
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])

