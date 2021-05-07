# op-typescript-learning
learning about typescript

## 1.简介
TypeScript是JavaScript类型的超集，它可以编译成纯JavaScript。

## 2.环境搭建
全局安装TypeScript
npm install typescript -g

## 3.第一个ts文件
```typescript
function demo(){
    let web: string  = "hello typescript"
    console.log(web)
}
demo()
```
在命令行上，运行TypeScript编译器:
```
tsc firstDemo.ts
```
直接运行ts文件: ts-node
```
npm install ts-node -g
ts-node firstDemo.ts
```

## 4.静态类型
1. 基础静态类型
2. 对象静态类型

## 5.类型注解和类型推论
工作使用问题（潜规则）
* 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
* 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解

## 6.函数参数和返回类型定义
```typescript
function getTotal(one : number, two : number) :number {
     return one + two;
}
const total = getTotal(1, 2);
```

## 7.数组类型注解方法
```typescript
type man = {
    name: string,
    age: number
}
const stus : man[]= [
    {name:'op',age:18},
    {name:'op1',age:19},
]
```

## 8.元组Tuple
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
```typescript
let x: [string, number];
x = ['hello', 10]; // OK
x = [10, 'hello']; // Error
```

## 9.接口interface
TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和规范的。

接口和类型别名的区别：
类型别名可以直接给类型，比如string
type boy = string;

接口可选值
```typescript
interface Boy {
    name: string;
    age: number;
    sex?: boolean;
}
```

索引签名
```typescript
interface Boy {
    name: string;
    age: number;
    sex?: boolean;
    [propname:string]:any;
    say():string;  //约束say方法，返回值string类型
}
```

类类型 实现接口
```typescript
class smallBoy implements Boy {
    name: 'small';
    age: 5;
    sex: true;
    say(){
        return 'small'
    }
}
```

继承接口
```typescript
interface Teacher extends Boy {
    teach():string
}
```

## 10.类
```typescript
class Person{
    name = "op"
    sayHello(){
        return this.name
    }
}

const p = new Person();
console.log(p.sayHello());
```

1. 继承
```typescript
class Boy extends Person{
    //重写sayHello方法
    sayHello(){
        return super.sayHello() + '你好'
    }
    sayGood(){
        return 'good'
    }
}
```

2. 访问类型
private、protected和public

public:允许在类的内部和外部被调用
private:只允许在类的内部被调用，外部不允许调用
protected:允许在类内及继承的子类中使用

3. 构造函数
```typescript
class Person{
    public name: string;
    constructor(name: string){
        this.name = name;
    }
}
```

4. Getter,Setter
```typescript
class Student {
    constructor(private _age:number){}
    get age(){
        return this._age
    }
}
const stu = new Student(28)
console.log(stu.age)
```

5. static
```typescript
class Person{
    static sayBye(){
        return 'bye'
    }
}
Person.sayBye()
```

6. 只读属性
```typescript
class Person{
    public readonly name: string;
    constructor(name: string){
        this.name = name;
    };
}
const person = new Person('op');
person.name = 'oo';  // 报错
console.log(person.name)
```
7. 抽象类
抽象类做为其它派生类的基类使用。它们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
```typescript
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}

class Dog extends Animal {
    makeSound(){
        console.log('汪汪汪');
    }
}
```

## 11.tsconfig.json文件

1. 生成tsconfig.json文件
tsc --init
其实它就是用来配置如何对ts文件进行编译的，我们都叫它typescript的编译配置文件。

2. 让tsconfig.json文件生效
使用tsc demo.ts进行编译，编译后会得到demo.js文件。
但是tsconfig.json这个编译配置文件并没有生效。使用tsc命令才会起作用。

如果根目录下有多个ts文件，却只想编译一个，有三种解决办法。
* 使用include配置
include属性是用来指定要编译的文件的，比如现在我们只编译demo.ts文件，而不编译demo2.ts文件，就可以这样写。
注意配置文件不支持单引号，所以里边都要使用双引号。
```
{
    "include":["demo.ts"],
    "compilerOptions":{
        //......
    }
}
```
* 使用exclude配置
include是包含的意思，exclude是不包含
```
{
    "exclude":["demo2.ts"],
    "compilerOptions":{
        //......
    }
}
```
* 使用 files 配置
```
{
    "files":["demo.ts"],
    "compilerOptions":{
        //......
    }
}
```

3. compilerOptions配置项
removeComments : 告诉TypeScript对编译出来的js文件是否显示注释（注解）。
strict : true,就代表编译和书写规范要按照TypeScript最严格的规范来写。
noImplicitAny : 允许你的注解类型 any 不用特意表明。
strictNullChecks : 设置为false,不强制检查 NULL 类型

outDir,rootDir指定ts文件位置
{
    "outDir": "./build" ,
    "rootDir": "./src" ,
}

配置项详解https://www.tslang.cn/docs/handbook/compiler-options.html


## 12.联合类型和类型守护

所谓联合类型，可以认为一个变量可能有两种或两种以上的类型
```typescript
interface Chinese {
    skin : boolean;
    say: () => {};
}
  
interface American {
    skin : boolean;
    skill: () => {};
}
  
function judgeWho(animal: Chinese | American) {
    animal.say()  //报错,judgeWho不能准确的判断联合类型具体的实例是什么。
}
```

类型守护
* 类型断言
类型断言就是通过断言的方式确定传递过来的准确值
```typescript
function judgeWho(animal: Chinese | American) {
    if (animal.skin) {
        (animal as Chinese).say();
    }else{
        (animal as American).skill();
    }
}
```
* in语法
```typescript
function judgeWho(animal: Chinese | American) {
    if ("say" in animal) {
        animal.say();
    }else{
        animal.skill();
    }
}
```

* typeof语法
```typescript
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
      return `${first}${second}`;
    }
    return first + second;
}
```

* instanceof 语法
类型保护的是一个对象，这时候就可以使用instanceof语法。
```typescript
class NumberObj {
    count: number;
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    //return first.count + second.count; 报错
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
```


## 13.enum枚举类型
```typescript
enum Status {
    BEIJING,
    SHANGHAI,
    FUZHOU,
}
  
function goTo(status: any) {
    if (status === Status.BEIJING) {
        return "beijing";
    } else if (status === Status.SHANGHAI) {
        return "shanghai";
    } else if (status === Status.FUZHOU) {
        return "fuzhou";
    }
}
const result = goTo(Status.BEIJING);
// const result = goTo(1);   枚举默认从0开始
console.log(`我要去${result}`);
```