// // "use strict";

// // // const Person = function (firstName, birthYear) {
// // //   this.firstName = firstName;
// // //   this.birthYear = birthYear;
// // // };
// // // Person.prototype.calcAge = function () {
// // //   console.log(2026 - this.birthYear);
// // // };

// // // const Hashim = new Person("Hashim", 2002);
// // // Hashim.calcAge()

// // ///////////////////////////////////////
// // // Coding Challenge #1

// // /*

// // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// // DATA CAR 1: 'BMW' going at 120 km/h
// // DATA CAR 2: 'Mercedes' going at 95 km/h

// // GOOD LUCK 😀
// // */

// // // function Car(make, speed) {
// // //   this.make = make;
// // //   this.speed = speed;
// // // }
// // // Car.prototype.accelerate = function () {
// // //   this.speed += 10;
// // //   console.log(`${this.make} is going at ${this.speed}km/h`);
// // // };

// // // Car.prototype.brake = function () {
// // //   this.speed -= 5;
// // //   console.log(`${this.make} is going at ${this.speed}km/h`);
// // // };
// // // const BMW = new Car("BMW", 120);
// // // const mercedes = new Car("Mercedes", 95);

// // // BMW.accelerate();
// // // BMW.accelerate();
// // // BMW.accelerate();
// // // BMW.brake();
// // // BMW.accelerate();

// // /*
// // 1. Re-create challenge 1, but this time using an ES6 class;
// // 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
// // 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
// // 4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

// // DATA CAR 1: 'Ford' going at 120 km/h

// // GOOD LUCK 😀
// // */
// // class Car {
// //   constructor(make, speed) {
// //     this.make = make;
// //     this.speed = speed;
// //   }

// //   accelerate() {
// //     this.speed += 10;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   }

// //   brake() {
// //     this.speed -= 5;
// //     console.log(`${this.make} is going at ${this.speed} km/h`);
// //   }

// //   get speedUs() {
// //     return this.speed / 1.6;
// //   }

// //   set speedUS(speed) {
// //     this.speed = speed * 1.6;
// //   }
// // }

// // const ford = new Car("Ford", 120);

// // ford.speedUS = 50;

// // console.log(ford.speedUs);
// // console.log(ford.speed);

// // const Person = function (firstName, birthYear) {
// //   this.firstName = firstName;
// //   this.birthYear = birthYear;
// // };
// // Person.prototype.calcAge = function () {
// //   console.log(2026 - this.birthYear);
// // };

// // const Student = function (firstName, birthYear, course) {
// //   Student.call(this, firstName, birthYear);
// //   this.course = course;
// // };

// // Student.prototype = Object.create(Person.prototype);
// // Student.prototype.intoduce = function () {
// //   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// // };

// // const Mike = new Student("Mike", 2020, "Computer Science");

// // Mike.intoduce;

// /* 
// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} is going at ${this.speed}km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 10;
// //   console.log(`${this.make} is going at ${this.speed}km/h`);
// // };

// // const EV = function (make, speed, charge) {
// //   Car.call(this, make, speed);
// //   this.charge = charge;
// // };

// // EV.prototype = Object.create(Car.prototype);

// // EV.prototype.chargeBattery = function (chargeTo) {
// //   this.charge = chargeTo;
// // };
// // EV.prototype.accelerate = function () {
// //   this.speed += 20;
// //   this.charge--;
// //   console.log(`${this.make} is going at ${this.speed}km/h`);
// // };
// // const tesla = new EV("Tesla", 120, 23);

// // class Person {
// //   constructor(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   }

// //   calcAge() {
// //     console.log(`Im ${this.firstName} name im ${2026 - this.birthYear}`);
// //   }
// // }
// // class Student extends Person {
// //   constructor(firstName, birthYear, course) {
// //     super(firstName, birthYear);
// //     this.course = course;
// //   }
// // }

// // const Hashim = new Student("Hashim", 2002, "Computer Science");
// // // Hashim.calcAge();

// // const PersonProto = {
// //   calcAge() {
// //     console.log(2026 - this.birthYear);
// //   },
// //   init(firstName, birthYear) {
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //   },
// // };

// // const steven = Object.create(PersonProto);

// // const StudentProto = Object.create(PersonProto);
// // const jay = Object.create(StudentProto);

// /* 
// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

// GOOD LUCK 😀
// */

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     return (this.speed = speed * 1.6);
//   }
// }

// class EVCL extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//     return this;
//   }
//   chargeBattery(chargeTo) {
//     this.charge = chargeTo;
//     return this;
//   }
//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`,
//     );
//     return this;
//   }
// }
// const rivian = new EVCL("Rivian", 120, 23);

// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBattery()
//   .accelerate();


//   console.log(rivian.speedUS)