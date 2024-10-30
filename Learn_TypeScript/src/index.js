var a = "Tushar";
// console.log(a);
var b = 8;
// console.log(b)
// *Declaring a variable with type
var num = 10;
var myName = "Tushar ";
console.log(myName);
// *union type -> variable can have multiple types
var c;
c = 10;
console.log(c);
var funcAdd = function (n, m) {
    console.log(n + m);
    return n + m;
};
// Arrays in TypeScript
var arr = [1, 2, 3, 4, 5];
// OR
var arr1 = [1, 2, 3, 4, 5];
var obj = {
    name: "Tushar",
    age: 21,
    isStudent: true,
};
var obj2 = {
    name: "subham",
    age: 21,
    isStudent: false,
};
var obj3 = {
    name: "sachin",
    age: 21,
};
var NewObj = {
    name: "Tushar",
    age: 21,
    isStudent: true,
    height: 154,
    weight: 50,
};
var func = function (n, m, l) {
    if (typeof l === "undefined") {
        return n + m;
    }
    return n + m + l;
};
func(25, 85);
var getDetails = function (stuDetail) {
    console.log(stuDetail);
};
getDetails({ name: "Tushar", age: 21, isStudent: true, marks: 85 });
// * ---------------------------------------------------------------------- *
// class in typescript
// we can use access modifier in class
var Player = /** @class */ (function () {
    function Player(h, w) {
        this.heigth = h;
        this.weight = w;
    }
    return Player;
}());
var tushar = new Player(154, 50);
console.log(tushar.heigth);
