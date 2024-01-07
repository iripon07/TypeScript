//normal function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 2, 3, 4];
const newArr = arr.map((elem: number) => elem * elem);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Batman",
  balance: 5,
  addBalance(money: number) {
    console.log(`My new balance is ${this.balance + money}`);
  },
};
