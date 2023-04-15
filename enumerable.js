// var 오브젝트 = {name : "Kim", age:30};
// console.log(Object.getOwnPropertyDescriptor(오브젝트, 'name'))

// for (var i = 0; i < ) {
// }

// [1,2,3].forEach()


// Array에는 for, forEach();
// for in 반복문: Object

// class 부모 {
// }
// 부모.prototype.name= "Park";
// var 오브젝트 = new 부모();
// for (const 오브젝트Key in 오브젝트) {
// for (const 오브젝트Key in 오브젝트) {
//     if(오브젝트.hasOwnProperty(오브젝트Key)){ //내가 가지고 있는 것만 출력
//         console.log(오브젝트[오브젝트Key])
    // }
    //1. enumerable 한것만 반복해줍니다.
    //2. 부모의 prototype도 반복해줍니다.
// }


var 어레이 = [1,2,3,4,4,5]

for (const 자료 of 어레이) {
    console.log(자료)
}

document.getElementsByClassName(); [HTML1, HTML2]
document.querySelectorAll();

// 에리이[Symbol.iterator]();


// Array, String, arguments, NodeList, Map(신자료형), Set(신자료형)
// iterable한 자료형에만 사용가능