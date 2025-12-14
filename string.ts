var str1 = "Hello";
var str2 = "Hello";
var str3 = `Hello from typescript`;

var age: number = 35;
var userNamee: string = "Himanshu";
console.log(`my name is ${userNamee} my age is ${age}`);

var num1: number = 100;
var numConvert: string = String(100);
var numConvert2: string = num1.toString();
var numConvert3: string = "" + numConvert2;
console.log(typeof numConvert, typeof numConvert2, typeof numConvert3);

var isLogin: boolean = true;
var other;
other = isLogin;
console.log(typeof other);
