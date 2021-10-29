### Part I
Project - Sudoku
Sudoku is a logic puzzle played on a 9x9 grid subdivided into 9 3x3 subgrids. The player is presented a partially filled puzzle, and must complete it following these rules:

Each column must contain the numbers 1-9 (no repeats!)
Each row must contain the numbers 1-9 (no repeats!)
Each 3x3 subgrid must contain the numbers 1-9 (no repeats!)
If you've never played sudoku before, try an "easy" puzzle from the New York Times' puzzle section.

This is a Bootcamp Prep Project. Projects are for you to work on over the course of the week as you like.

GOAL
The ultimate goal of this project is to create a "sudoku checker". The sudoku checker will be a function that accepts a single sudoku grid (represented by an array of arrays) and returns true if the grid follows the rules above and false if not.

To start, using an empty CodePen or repl.it, write the following functions:

getRow: This function should accept two arguments: a sudoku grid (represented by an array of arrays) and a row index. The function should return an array containing the numbers in the specified row.

getColumn: This function should accept a sudoku grid and a column index. The function should return an array containing the numbers in the specified column.

getSection: This function should accept three arguments: a sudoku grid, and an x and y coordinate for one of the puzzle's 3x3 subgrids. The function should return an array with all the numbers in the specified subgrid.

Remember that our puzzle is broken into 9 subgrids. In our coordinate system, (0,0) will represent the subgrid in the upper left, (1,0) will represent the upper-middle and so on.

Example:

let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
              [ 2,7,1,   9,6,3,   4,8,5 ],
              [ 4,6,3,   5,8,1,   7,9,2 ],

              [ 9,3,4,   6,1,7,   2,5,8 ],
              [ 5,1,7,   2,3,8,   9,6,4 ],
              [ 6,8,2,   4,5,9,   3,7,1 ],

              [ 1,5,9,   8,7,4,   6,2,3 ],
              [ 7,4,6,   3,2,5,   8,1,9 ],
              [ 3,2,8,   1,9,6,   5,4,7 ]];


getRow(puzzle, 8);
// -> [ 3,2,8,1,9,6,5,4,7 ]

getRow(puzzle, 0);
// -> [ 8,9,5,7,4,2,1,3,6 ]

getColumn(puzzle, 0);
// -> [ 8,2,4,9,5,6,1,7,3 ]

getRow(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]

getSection(puzzle, 0, 0);
// -> [ 8,9,5,2,7,1,4,6,3 ]

getSection(puzzle, 1,0);
// -> [ 7,4,2,9,6,3,5,8,1 ]

### Part II
Project Sudoku Continued
We now have functions that accept a sudoku grid and return specific subsections (row, column, or subgrid).

Now we need to write a function that will accept a subsection and check that it includes the numbers 1-9 (with no repeats). Write a function includes1to9 that accomplishes this.

Bonus:  Write a function isSame that takes two sudoku puzzles as parameters and returns a boolean indicating whether they are identical puzzles.