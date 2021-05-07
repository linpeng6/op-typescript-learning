// //interface

// interface Boy {
//     name: string;
//     age: number;
//     sex?: boolean;
//     [propname:string]:any;
//     say():string
// }

// const boy = {
//     name: 'op',
//     age: 18,
//     say(){
//         return 'ok'
//     },
//     teacher(){
//         return 'teach'
//     }
// }
 
// class smallBoy implements Boy {
//     name: 'small';
//     age: 5;
//     sex: true;
//     say(){
//         return 'small'
//     }
// }

// interface Teacher extends Boy {
//     teacher():string
// }
// const Resume = (boy: Boy) => {
//     boy.age < 24 && console.log(boy.name + '通过')
//     boy.age >= 24 && console.log(boy.name + '淘汰')
// }

// const getResume = (boy: Teacher) => {
//     console.log(boy.name + ',年龄:' + boy.age)
// }
// Resume(boy);
// getResume(boy);