// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is fetched";
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to fetched data");
//     }
//   });
// };

// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise();
//   return data;
// };

// const makePromiseBoolean = (): Promise<boolean> => {
//   return new Promise<boolean>((resolve, reject) => {
//     const data: boolean = true;
//     if (data) {
//       resolve(data);
//     } else {
//       reject("Failed to fetched data");
//     }
//   });
// };
// const getPromiseDataBoolean = async (): Promise<boolean> => {
//   const data = await makePromiseBoolean();
//   return data;
// };
