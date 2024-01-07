interface CrushInterface<T, U = null> {
  name: string;
  husband: T;
  wife?: U;
}

const crush1: CrushInterface<boolean, string> = {
  name: "Kristen Stewart",
  husband: true,
  wife: "Bela",
};
const crush2: CrushInterface<string> = {
  name: "Kristen Stewart",
  husband: "Villain",
};
const crush3: CrushInterface<{ name: string; salary: number }> = {
  name: "Kristen Stewart",
  husband: {
    name: "Villain",
    salary: 1,
  },
};

interface IPerson {
  name: string;
  age: number;
}
const crush4: CrushInterface<IPerson, IPerson> = {
  name: "Kristen Stewart",
  husband: {
    name: "Villain",
    age: 1,
  },
  wife: {
    name: "bela",
    age: 10,
  },
};

const userNameAndRollNumbers: Array<{ name: string; roll: number }> = [
  {
    name: "A",
    roll: 2,
  },
  {
    name: "V",
    roll: 1,
  },
];

type GenericTuple<X, Y> = [X, Y];
type genericArray<T> = Array<T>;
const rollNumbers: genericArray<number> = [1, 2, 1, 2];
const rollNumbers2: Array<string> = ["as", "sa"];

const relation: GenericTuple<string, string> = ["X", "V"];

// type relationWithSalaryType = {name: string, salary:number}
interface relationWithSalaryInterface {
  name: string;
  salary: number;
}

const relationWithSalary: GenericTuple<relationWithSalaryInterface, string> = [
  {
    name: "x",
    salary: 4,
  },
  "k",
];
