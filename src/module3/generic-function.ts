//Arrow function
const createArray = (param: string): string[] => {
  return [param];
};
const result = createArray("Bangladesh");

const createArray1 = <X, Y>(param1: X, param2: Y): [X, Y] => {
  return [param1, param2];
};
function createArray2<X, Y>(param1: X, param2: Y): [X, Y] {
  return [param1, param2];
}

const result1 = createArray1<string, string>("Bangladesh", "I love my country");
const result2 = createArray1<boolean, Array<string>>(true, ["Bangladesh"]);

type Name = { name: string };
const result3 = createArray1<Name, boolean>({ name: "Bangladesh" }, false);

//Spread operator
const crush = "Kristen Stewart";

// const newData = {...myInfo, crush}

const addMeInMyCrushMind = <T>(myInfo: T) => {
  const crush = "Kristen Stewart";
  const newData = { ...myInfo, crush };
  return newData;
};
const myInfo = {
  name: "Villain",
  age: 100,
  salary: 100,
};

const result5 = addMeInMyCrushMind(myInfo);
result5;
