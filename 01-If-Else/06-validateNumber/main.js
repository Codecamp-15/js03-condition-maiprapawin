let input1 = prompt("Enter a number");
let input2 = prompt("Enter another number");

if (isNaN(input1) || isNaN(input2)) {
  alert("Invalid number");
} else {
  alert(+input1 + +input2);
}
