
var a  = 10;
// export var a  = 10;
// export var b = 20;
var b = 20;
var c = 30;
export {a, b};
export default c;

// let 신체정보 = {
//     body : {
//         height: 190,
//         weight: 70
//     },
//     size: ["상의 Large", "바지 30인치"]
// };

// let {
//     body : {
//         height,
//         weight
//     },
//     size : [상의, 하의 ]
// } = 신체정보;

// function 함수([name, age]) {
//     console.log(name)
//     console.log(age)
// }
// var array = ['Kim', 30]
// 함수(['Kim', 30])

// var [number, address] = [30, 'seoul']
// var {address: a, number = 20} = {address, number}
// var {address:a, number = 20} = {address : 'seoul', number : 30}

// function 함수(name, age) {
//     console.log(name)
//     console.log(age)
// }
// var array = ['Kim', 30]
// 함수(array[0], array[1]);


// var array = [2,3,4]
// var a = array[0];
// var b = array[1];
// var [a,b,c] = [2,3,4]

// 패턴
// 틀린그림 찾기능력이 향상되는 Destructuring 문법

// var arr = [2,3,4]
// var [a,b,c = 10] = [2,3,4]
//직관적으로 변수 만들 수 있음

// var obj = {name: 'kim', age:30}
// var name = obj.name;
// var age = obj.age;

// var {name: 나이 = 'Park'} = {}
// var {name: 나이, age = 31} = {name: 'kim'}
// var {name, age = 31} = {name: 'kim'}
// var {name, age} = {name: 'kim', age:30}
// console.log(나이)

//destructuring의 역발상
//반대로 변수들을 object에 집어넣고 싶은 경우
// var name = 'Kim'
// var age = 30;
// var obj = {name : name, age : age}
// var obj = {name, age}

//함수 파라미터 만들때도 destrucuring 문법사용가능
// var obj = {name:'Kim', age:30}
// function 함수([name, age]) { //함수 파라미터 변수를 만들 때도, destrucuring 가능
// function 함수({name, age}) { //함수 파라미터 변수를 만들 때도, destrucuring 가능
// function 함수(파라미터) {
//     console.log(파라미터)
//     console.log(name)
//     console.log(age)
// }
// 함수(obj);
// 함수({name:'kim', age : 30})
// 함수([1,2])