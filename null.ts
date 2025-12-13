// null
var data1: null | string = null;
data1 = "John Doe";
var userName: null | string = null;
var isLogin: boolean = true;

if (isLogin) {
  userName = "Himanshu";
}
console.log(typeof data1);

//undefined
var userName1: undefined | string = undefined;
var val1 = null;
// userName1 = "John Doe";
console.log(typeof val1 === userName1);
