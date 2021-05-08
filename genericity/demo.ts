//泛型
// function join<T>(first :T, second :T) {
//     return `${first}${second}`;

// }
// join<string>('op','1');

// function myFun<T>(params: T[]){
//     return params
// }

// function myFun<T>(params: Array<T>){
//     return params
// }

// myFun<string>(['1','2'])

//在类中使用泛型
// class STUS<T extends number | string>{
//     constructor(private stus: T[]){}
//     getStu(index: number):T{
//         return this.stus[index]
//     }
// }

// const s = new STUS<string>(['stu1','stu2','stu3']);
// console.log(s.getStu(1));

// interface STU{
//     name:string;
// }
// class STUS<T extends STU>{
//     constructor(private stus: T[]){}
//     getStu(index: number):string{
//         return this.stus[index].name
//     }
// }

// const s = new STUS([
//     {name:'stu1'},
//     {name:'stu2'},
//     {name:'stu3'}
// ]);
// console.log(s.getStu(1));