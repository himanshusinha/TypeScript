// // var firstName: string = "Himanshu";
// // var collegeName: string = "DAVV";
// // console.log(firstName);
// // console.log(collegeName);
// var num: number = 10;
// console.log(num);
// var user: string = "Himanshu";
// console.log(user);
// var isLogin: boolean = true;
// console.log(isLogin);
// var data = "";
// console.log(data);
// // var age: any;
// // console.log(age);
// var a = undefined;
// console.log(a);
// var sym1 = Symbol();
// var sym2 = Symbol("description");
// var sym3 = Symbol("description");
// console.log(sym1 == sym2);
// console.log(sym2 == sym3);
// // Array
// var num1: number[] = [10, 20, 23];
// // Tuple
// var person: [string, number] = ["Himanshu", 35];
// console.log(person);
// // Object
// var userInfo: { name: string; age: number } = { name: "Himashu", age: 22 };
// console.log(userInfo);
// // any
// var x: any = 10;
// //unknown
// var input: unknown = "Hello";
// if (typeof input === "string") {
//   console.log(input.toUpperCase());
// }
// // Union (Multiple Types holds)
// let value: string | number;
// value = "Hello";
// value = 23;
// console.log(value);
// // Intersection (Combine Multiple Types)
// type Employee = { name: string };
// type Manager = { department: string };
// type TeamLead = Employee & Manager;
// let lead: TeamLead = { name: "Himanshu", department: "Engineering" };
// // Type Alias
// type Id = string | number;
// let userId: Id = "user 123";
// // Enum
// enum Role {
//   Admin,
//   User,
//   Guest,
// }
// let userRole: Role = Role.Admin;
// // Literal Types
// let direction: "up" | "down";
// direction = "up";
// direction = "down";
