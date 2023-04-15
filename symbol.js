//오브젝트 자료형의 키값으로 사용할 수 있다.
// var symbol = Symbol("설명") //시크릿한 자료형
// var weight = Symbol('내 시크릿 몸무게')
// var height = Symbol('내 시크릿 키')
// var person = {name : "Han", [west] : 50}
// // person.weight = 100;
// person[weight] = 200;
// person[height] = 160;
// for (const key in person) {
//     console.log(person[key])
// }

var a = Symbol("설명1");
var b = Symbol.for("설명1");

//주석을 달듯이
// 특징1.

console.log(a===b)

var array = [2,3,4];
array[Symbol.iterator] //array에 집어넣는 기본 Symbol






