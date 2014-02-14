//Guerra, Andre 12/13/14 Expressions - Industry

var gridSize = prompt("What size is your grid container in pixels? i.e. 960, 1000, 1100, etc. (write without px)"); //Create a base to perform the column width calculation
var numberofColumns = prompt("How many columns would you like? i.e. 8, 10, 12"); //Creates the number of columns the grid contains
var padding = prompt("How much padding outside each column?"); //Creates the space inbetween the gride columns

padding == numberofColumns * 2 //Calculates the total padding pixels

var fullWidth = (gridSize - padding); //Calculates Full-Width Column width in px
var oneHalf = fullWidth / 2; //Calculates One-Half Column (2 columns) width in px
var oneThird = fullWidth / 3; //Calculates One-Third Columns (3 columns) width in px
var oneFourth = fullWidth / 4; //Calculates One-Fourth Column (4 columns) width in px
var oneFifth = fullWidth / 5;
var oneSixth = fullWidth / 6;


alert("Total width of your grid is " + gridSize + "px and your css column widths for " + numberofColumns + " columns are \n Fullwidth:" + fullWidth + "px \nOne Half Column: " + oneHalf + "px \nTwo Third Column: " + oneThird + "px \nOne Forth Column: " + oneFourth + "px \nOne Fifth Column: " + oneFifth + "px \nOne Sixth Column: " + oneSixth + "px" );