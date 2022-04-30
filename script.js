// YOU MUST MASTER: 🥸
//'HOISTING'
//'SCOPE CHAIN'
//'THIS'
//'INHERITANCE' --> "Classes"
//________________________________
//'CLOSURES'
//'FUNCTIONS AS FIRST CLASS CITIZENS"
//'ASYNCRONOUS JS'
//'DOM MANIPULATION'
//'RECURSION'
// printMe();
// console.log(printAkif);
// console.log(string);

// var string = 'Hello';
// console.log(string);

// function declaration
// function printMe() {
//   console.log('Im printed');
// }

//function expression
// var printAkif = function () {
//   console.log('Im Akif');
// };

// console.log(dog);
// var dog = 'BigDog';

// function sayHello() {
//   var person = 'Akif';
//   console.log(person);
// }

// const animal = 'Dragon';

// for (count = 0; count < 1; count++) {
//   // const animal = 'Lion';
//   console.log(animal);
// } // Execution Context

// when we call this we create a new EXECUTION CONTEXT

// => scope chain

// window ==> global scope
//const hello = 'hello' in the global scope

// if (true) {
//
//   console.log(hello)
// }

// const dog = {
//   breed: 'beagle',
//   name: 'Snoppy',
//   bark() {
//     console.log(this.name + ' barks woooof');
//   },
// };

// const cat = {
//   breed: 'persian',
//   name: 'Godfrey',
// };
// window.name = 'Aaron';

// dog.bark();
// dog.bark.call(window, 'arg1');

// function print() {
//   console.log(this);
// }

// window.print.call(dog);
// window.print()
// print()
// print.call(this);

// console.log(dog);

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.bark = function () {
//   console.log('Woof');
// };

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   bark() {
//     console.log('Woof');
//   }
// }

// const snoopy = new Dog('Snoopy');
// console.dir(snoopy);
// const filo = new Dog('Fifo');
// console.dir(filo);

// filo.bark();
// const array = ['Hello'];
// console.log(array);

// function closure() {
//   //protect data
//   //caching
//   let count = 0;
//   return function addingOne() {
//     count += 1;
//     console.log(count);
//   };
// }

// const addOne = closure();
// const addOne2 = closure();
// addOne();
// addOne();
// addOne();
// addOne();
// addOne();
// addOne2();

function expThree() {
  const cache = {}; //cache but its inaccesible
  return function (n) {
    if (cache.hasOwnProperty(String(n))) {
      console.log(cache[String(n)]);
      return { result: cache[String(n)], cache };
    }
    cache[String(n)] = n ** 3;
    console.log('processed', cache[String(n)]);
  };
}

const myPowerToThreeexpThree = expThree();
myPowerToThreeexpThree(2);
myPowerToThreeexpThree(2);
myPowerToThreeexpThree(3);
myPowerToThreeexpThree(3);
const { cache } = myPowerToThreeexpThree(2);
console.log(cache);
