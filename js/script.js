//Guerra, Andre 12/13/14 Expressions - Industry

var gridSize = prompt("What size is your grid container in pixels? i.e. 960, 1000, 1100, etc. (write without px)");
var numberofColumns = prompt("How many columns would you like? i.e. 8, 10, 12");
var marginSpace = prompt("How much space would you like inbetween your columns?");

var AllColumnSize = (gridSize - marginSpace) / numberofColumns;

var fullWidth = (gridSize - marginSpace) + "px";


alert("Total width of your grid is " + gridSize + "px and your column widths for " + numberofColumns + "are \n Fullwidth column:" + fullWidth + "px \n" );