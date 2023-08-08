// V0: แสดงเฉพาะตัวเลขที่มากสุด
// V1: Handle เลขที่ไม่เหมือนกัน
// V2: Handle เลขที่เหมือนกันได้

let x = Number(prompt("Enter number 1"));
let y = +prompt("Enter number 2");
let z = prompt("Enter number 3") * 1;

// let max;

// if (x > y && x > z) {
//   //   console.log(`MAX = ${x}`);
//   max = x;
// } else if (y > x && y > z) {
//   //   console.log(`MAX = ${y}`);
//   max = y;
// } else if (z > x && z && y) {
//   //   console.log(`MAX = ${z}`);
//   max = z;
// }

// console.log(`MAX = ${max}`);

// V1: Handle เลขที่ไม่เหมือนกัน >> แสดงผลเป็นการเรียงลำดับมากไปน้อย
// Case1: x มากสุด
//     1.1: y มากกว่า z
//     1.2: z มากกว่า y
// Case2: y มากสุด
// Case3: z มากสุด
// DRY Principle: Don't Repeat Yourself ไม่เขียนโค้ดซ้ำ

let max;
let mid;
let min;

if (x > y && x > z) {
  max = x;
  if (y > z) {
    mid = y;
    min = z;
  } else {
    mid = z;
    min = y;
  }
} else if (y > x && y > z) {
  max = y;
  if (x > z) {
    mid = x;
    min = z;
  } else {
    mid = z;
    min = x;
  }
} else if (z > x && z && y) {
  max = z;
  if (x > y) {
    mid = x;
    min = y;
  } else {
    mid = y;
    min = x;
  }
}

console.log(`${max} : ${mid} : ${min}`);

// หรือทำแบบนี้

// if (x >= y && x >= z && y >= z) {
//   // x,y,z
//   max = x;
//   mid = y;
//   min = z;
// } else if (x >= y && x >= z && y < z) {
//   max = x;
//   mid = z;
//   min = y;
// } else if (y >= x && y >= z && x >= z) {
//   max = y;
//   mid = x;
//   min = z;
// } else if (y >= x && y >= z && x < z) {
//   max = y;
//   mid = z;
//   min = x;
// } else if (z >= x && z >= y && x >= y) {
//   max = z;
//   mid = x;
//   min = y;
// } else {
//   max = z;
//   mid = y;
//   min = x;
// }

// console.log(`${max} : ${mid} : ${min}`);
