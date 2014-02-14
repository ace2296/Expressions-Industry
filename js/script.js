//Guerra, Andre 12/13/14 Expressions - Industry

var gridSize = prompt("What size is your grid container in pixels? i.e. 960, 1000, 1100, etc. (write without px)");
var numberofColumns = prompt("How many columns would you like? i.e. 8, 10, 12");
var padding = prompt("How much padding outside each column?");

padding *= 2

var fullWidth = (gridSize -padding) + "px";


alert("Total width of your grid is " + gridSize + "px and your column widths for " + numberofColumns + "are \n Fullwidth:" + fullWidth + "px \n" );