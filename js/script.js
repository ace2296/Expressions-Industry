//Guerra, Andre 12/13/14 Expressions - Industry

var gridSize = prompt("What size is your grid container in pixels? i.e. 960, 1000, 1100, etc. (write without px)");
var numberofColumns = prompt("How many columns would you like? i.e. 8, 10, 12");
var marginSpace = prompt("How much space would you like inbetween your columns?");

var columnSize = (gridSize - marginSpace) / numberofColumns;
