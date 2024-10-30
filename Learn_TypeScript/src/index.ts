var a = "Tushar";
// console.log(a);

var b = 8;
// console.log(b)

// *Declaring a variable with type

let num: number = 10;
let myName: string = "Tushar ";
console.log(myName);

// *union type -> variable can have multiple types
let c: number | string;
c = 10;
console.log(c);

// *function in typescript

// const func = (n:number , m:number):number=>{
//     console.log(n+m);
//     return n+m;
// }

// console.log(func(2,5));
//  func(2,5)

// *type keyword

// type = UserName  = (string | number);
type UserName = (n: number, m: number) => number;

const funcAdd: UserName = (n, m) => {
  console.log(n + m);
  return n + m;
};

// Arrays in TypeScript

const arr: number[] = [1, 2, 3, 4, 5];
// OR
const arr1: Array<number> = [1, 2, 3, 4, 5];

// Objects in TypeScript

type Obj = {
  name: string;
  age: number;
  isStudent?: boolean; // ? -> optional
};

const obj: Obj = {
  name: "Tushar",
  age: 21,
  isStudent: true,
};
const obj2: Obj = {
  name: "subham",
  age: 21,
  isStudent: false,
};
const obj3: Obj = {
  name: "sachin",
  age: 21,
};

// *interface in typescript

interface User {
  name: string;
  age: number;
  isStudent?: boolean;
}

interface NewObj extends User {
  height: number;
  weight: number;
}

const NewObj: NewObj = {
  name: "Tushar",
  age: 21,
  isStudent: true,
  height: 154,
  weight: 50,
};

// * function in typescript

type FunType = (n: number, m: number, l?: number) => number;

const func: FunType = (n, m, l) => {
  if (typeof l === "undefined") {
    return n + m;
  }
  return n + m + l;
};

func(25, 85);

// function with object

type GetDataType = (stuDetail: {
  name: string,
  age: number,
  isStudent?: boolean,
    readonly marks?: number
}) => void;


const getDetails: GetDataType = (stuDetail) => {
  console.log(stuDetail);
};

getDetails({ name: "Tushar", age: 21, isStudent: true, marks: 85 });


// * ---------------------------------------------------------------------- *

// class in typescript
// we can use access modifier in class

class Player{
    heigth:number;
    weight:number;

    constructor(h:number,w:number){
        this.heigth = h;
        this.weight = w;
    }
}

const tushar = new Player(154,50);
console.log(tushar.heigth);

// * Type Assertion

// const btn = document.getElementById('btn')!;
// const btn = document.getElementById('btn') as HTMLElement;
// const btn = <HTMLElement>document.getElementById('btn');

  // btn.onClick();


  // * Generics in TypeScript

  const fun = <custonType>(n: custonType):custonType =>{
      return n;
  };

  const ans = fun(10);
