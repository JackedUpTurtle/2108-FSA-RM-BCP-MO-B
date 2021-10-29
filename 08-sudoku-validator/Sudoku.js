// getRow: This function should accept two arguments: a sudoku 
// grid (represented by an array of arrays) and a row index. 
// The function should return an array containing the numbers 
// in the specified row.

// getColumn: This function should accept a sudoku grid and 
// a column index. The function should return an array 
// containing the numbers in the specified column.

// getSection: This function should accept three arguments: 
// a sudoku grid, and an x and y coordinate for one of the 
// puzzle's 3x3 subgrids. The function should return an array 
// with all the numbers in the specified subgrid.

// Remember that our puzzle is broken into 9 subgrids. In 
// our coordinate system, (0,0) will represent the subgrid in 
// the upper left, (1,0) will represent the upper-middle and 
// so on.

/* Think about how to deal with 2D objects
Come up with a way to iterate through each
individual row and column. Using a nested
for loop is a good idea 

Make a 'checker' function that evaluates 
whether a list contains the numbers 1-9
only once. Make a reference list of valid
numbers. IndexOf may be helpful here. */

let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];

/* checker evaluates the numbers in 'list', and 
makes sure they are only 1-9. Checker will evaluate
the first number in list, continue to iterate through
the list, and return 'false' if any number repeats.
Checker will continue its iteration for all indices
contained within the list unless it finds a repeating
value */

// function checker(arr) {
// let check = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     if (check.join(' ') === arr.sort().join(' ')) { 
//         return true
//     } else {
//         return false
//     }
// }

// function getRow(grid) {
//     for (let row = 0; row < grid.length; row++) {
//         if (checker(grid[row]) === false) {
//             return false
//         }
//     }
//     return true
// }


// // grid[row][col];
//             // col=0....9
//         //for (let col=0; col <  grid[row].length; col++) {
// function flipper(puzzle) {
//     let rows = []
//     for (let x = 0; x < puzzle.length; x++) {
//         let cols = []
//         for (let y = 0; y <= puzzle[x].length; y++) 
//              cols.push(y);           
//         rows.push(cols);     
//             }
//             return rows
//         }

        
// David's solution

function isValid()