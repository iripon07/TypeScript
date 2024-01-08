// //interface
// // interface IVehicle {
// //   name: string;
// //   model: string;
// // }
// // const vehicle: IVehicle = {
// //   name: "car",
// //   model: "200",
// // };

// interface IVehicle {
//   startEngine(): void;
//   stopEngine(): void;
//   move(): void;
// }
// class Vehicle implements IVehicle {
//   constructor(
//     public name: string,
//     public brand: string,
//     public model: number
//   ) {}
//   startEngine(): void {
//     console.log(`I am starting engine`);
//   }
//   stopEngine(): void {
//     console.log(`I am stopping engine`);
//   }
//   move(): void {
//     console.log(`I am moving`);
//   }
//   test() {
//     console.log(`I am for testing purpose`);
//   }
// }

// const vehicle = new Vehicle("Car", "Ferrari", 200)

 abstract class Vehicle {
  constructor(
    public name: string,
    public brand: string,
    public model: number
  ) {}
  startEngine(): void {
    console.log(`I am starting engine`);
  }
  stopEngine(): void {
    console.log(`I am stopping engine`);
  }
  move(): void {
    console.log(`I am moving`);
  }
  test() {
    console.log(`I am for testing purpose`);
  }
}
class Car extends Vehicle{
  startEngine(): void {
    console.log(`I am starting engine`);
  }
}

const car1 = new Vehicle("Car", "Pagani", 2022)