//函数返回类型添加注解
// function getTotal(one : number, two : number) :number {
//     return one + two;
//   }

// const total = getTotal(1, 2);

//void
// function sayHello(): void {
//     console.log('hello')
// }

//never
//never类型表示的是那些永不存在的值的类型。 
//例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
//变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// function errorFunc() :never {
//     throw new Error();
//     console.log('error');
// }

// function forNever(): never {
//     while (true) {}
//     console.log("forever");
// }

//函数参数为对象（解构）
// 错误写法
// function add({ one: number, two: number }) {
//     return one + two;
//   }

//   const total = add({ one: 1, two: 2 });

// function add({ one, two }: { one: number, two: number }) {
//     return one + two
// }

// const res = add({ one: 1, two: 2 })

//错误写法
// function getNumber({ one }:number) {
//     return one;
// }

// const one = getNumber({ one: 1 });

function getNumber({ one }:{one:number}) {
    return one;
}

const one = getNumber({ one: 1 });