// function greeter (person: string) {
//   return "Hello, " + person;
// }
// // let user = "Jane User";
// let user = [0, 1, 2];
// document.body.innerHTML = greeter(user);
// demo2 接口
// interface Person {
//   firstName: string;
//   lastName: string;
// }
// function greeter (person: Person){
//   return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = { firstName : "Jane", lastName: "User"};
// document.body.innerHTML = greeter(user);
// 类 class
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
