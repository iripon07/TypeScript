// type Alphanumeric = string | number;

// //Key of guard
// function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
//   if (typeof param1 === "number" && param2 === "number") {
//     return param1 + param2;
//   } else {
//     return param1.toString() + param2.toString();
//   }
// }
// add("1", "2");
// add(1, 2);

// //In guard
// type NormalUserType = {
//   name: string;
// };
// type AdminUserType = {
//   name: string;
//   role: "admin";
// };

// function getUser(user: NormalUserType | AdminUserType): string {
//   if ("role" in user) {
//     return `I am and admin and my role is ${user.role}`;
//   } else {
//     return `I am a normal user`;
//   }
// }

// const normalUser1: NormalUserType = { name: "Batman" };
// const adminUser1: AdminUserType = { name: "Joker", role: "admin" };
// console.log(getUser(normalUser1));
// console.log(getUser(adminUser1));

// //Instanceof guard

// class Animal {
//   name: string;
//   species: string;
//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }
//   makeSound() {
//     console.log(`I am making sound`);
//   }
// }
// class Dog extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makeBarking() {
//     console.log(`I am barking`);
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, species: string) {
//     super(name, species);
//   }
//   makingMew() {
//     console.log(`I am mewing`);
//   }
// }

// function getAnimal(animal: Animal) {
//   if (animal instanceof Dog) {
//     animal.makeBarking();
//   } else if (animal instanceof Cat) {
//     animal.makingMew();
//   } else {
//     animal.makeSound();
//   }
// }

// const animal1 = new Dog("German", "Dog");
// const animal2 = new Cat("Billi", "Dog");
// getAnimal(animal1);

// function isDog(animal: Animal): animal is Dog {
//   return animal instanceof Dog;
// }
// function isCat(animal: Animal): animal is Cat {
//   return animal instanceof Cat;
// }

// function getAnimal1(animal: Animal) {
//   if (isDog(animal)) {
//     animal.makeBarking();
//   } else if (isCat(animal)) {
//     animal.makingMew();
//   } else {
//     animal.makeSound();
//   }
// }
