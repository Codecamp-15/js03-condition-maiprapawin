let num = prompt("Enter a number");

//Guard-Clause เขียนดักไว้ก่อน ข้อมูลที่ไม่ถูกโฉลกกับโปรแกรม

if (num === null || num.trim() === "" || isNaN(num)) {
  alert("Invalid Number");
} else if (+num > 0) {
  alert("Positive Number");
} else if (+num == 0) {
  alert("Zero");
} else if (+num < 0) {
  alert("Negative Number");
}

// if (+num > 0) {
//   alert("Positive number");
// } else if (+num === 0) {
//   alert("Zero");
// } else if (+num < 0) {
//   alert("Negative number");
// } else {
//   alert("Invalid number");
// }
