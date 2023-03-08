"use strict";
// const person : {
//     name:string,
//     age:number
// } = 
// const person :{
//     name:string,
//     age:number,
//     hobbies:string[],
//     role:[number,string]
// } = {
//     name:'Maximilian',
//     age : 30,
//     hobbies : ['sports','sex'] ,
//     role : [1,'hoyyaa']
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'sex'],
    role: Role.ADMIN
};
// person.role.push('admin')
// person.role[1] = 10
let favoriteActivities;
favoriteActivities = ['diuc'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
