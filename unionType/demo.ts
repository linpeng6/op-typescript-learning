//联合类型
// interface Chinese {
//     skin : boolean;
//     say: () => {};
// }
  
// interface American {
//     skin : boolean;
//     skill: () => {};
// }
  
// function judgeWho(animal: Chinese | American) {
//     if (animal.skin) {
//         (animal as Chinese).say();
//     }else{
//         (animal as American).skill();
//     }
// }
// function judgeWho(animal: Chinese | American) {
//     if ("say" in animal) {
//         animal.say();
//     }else{
//         animal.skill();
//     }
// }

// function add(first: string | number, second: string | number) {
//     if (typeof first === "string" || typeof second === "string") {
//       return `${first}${second}`;
//     }
//     return first + second;
// }

// class NumberObj {
//     count: number;
// }

// function addObj(first: object | NumberObj, second: object | NumberObj) {
//     //return first.count + second.count; 报错
//     if (first instanceof NumberObj && second instanceof NumberObj) {
//         return first.count + second.count;
//     }
//     return 0;
// }