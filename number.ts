var num1: number = 10;
var num2: number = 20;
var num3 = "20";
var total = num1 + num3;
console.log(total);

var oct: number = 0o100001;
var hexa: number = 0b100001;
var binary: number = 0x100001;

console.log(oct + 10);

var item1: number = 10;
var item2 = "10";
// var itemConverted = Number(item2);
var itemConverted = +item2;
// console.log(item1 + itemConverted);
console.log(item1 + +itemConverted);

// TypeInference -->> Automatic TypeScript Detect Values
// var data = 30;
// data = 20;
// data = "Hello";

var data: number | string = 30;
data = "Hello";
console.log(data);
