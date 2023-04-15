var data = {
    odd : [],
    even : [],
    //쩜쩜쩜이라는 rest 기호를 쓰시면 입력된 파라미터들을 전부 array로 싸매줍니다.
    setter함수 :  function(...숫자들) {
        숫자들.forEach( (a) =>  {
            if (a % 2 === 1) {
                this.odd.push(a) // 홀수일때
            }else {
                this.even.push(a) //짝수일때
            }
        })
        console.log(숫자들)
    }
};
data.setter함수(1,2,3)

// class Unit {
//     constructor() {
//         this.체력 = 100;
//         this.공격력 = 5;
//     }
//     get battlePoint(){
//         return this.체력 + this.공격력;
//     }
//     set heal(a){
//         this.체력 = this.체력 + a;
//     }
// }
// var 쎈애 = new Unit();;
//
// console.log(쎈애.battlePoint);
// 쎈애.heal = 50;
// console.log(쎈애.battlePoint);


// class Dog {
//     constructor(타입, 칼라) {
//         this.type = 타입;
//         this.color = 칼라;
//     }
//     한살먹기(){
//         if(this instanceof Cat){//a instanceof b 이렇게 쓰시면 a가 b로부터 생성된 오브젝트인지 아닌지를 true/false로 알려주는 연산자입니다.
//             this.age++
//         }
//     }
// }

// class Cat extends Dog{
//     constructor(타입, 칼라, 나이) {
//         super(타입, 칼라);
//         this.age = 나이;
//     }
// }
// var 강아지1 = new Dog('똥개', 'black');
// var 강아지2 = new Dog('말티즈', 'white')
// var 강아지3 = new Dog('진돗개', 'brown')
// var 고양이1 = new Cat('동네고양이', 'white', 5)

// console.log(강아지1)
// console.log(강아지2)
// console.log(강아지3)
// console.log(고양이1)

//6. getter, setter 대체 왜 쓰는지 알아보기

//class에서 사용하는 get/set
// class 사람 { //오브젝트랑 동일하다.
//     constructor() {
//         this.name = 'Park';
//         this.age = 20;
//     }
    //prototype 함수들에도 get,set가능
    // get nextAge(){ //내년 나이를 출력해주는 함수 제작 끝;
    //     return this.age + 1;
    // }
    // set setAge(나이){
    //     this.age = 나이;
    // }
// }

// var 사람1 = new 사람();
// 사람1.setAge = 200;

// console.log(사람1.age)
// console.log(사람1.nextAge);

// 함수를 만들어 object 데이터를 다루는 이유
// 1. object자료가 복잡할 때 이득
// property화 getter => get, setter => set
// 복잡한 소괄호 꼴보기 싫다면 set, get 키워드, 옵션일 뿐이다.
// getter함수들 return이 있어야 한다.
// setter 파라미터가 1개 있어야 한다.
// var 사람 = {
//     name : 'Park',
//     age : 30,
//     get nextAge(){ //데이터 꺼내쓰는 함수에
//         return this.age + 1;
//     },
//     set setAge(나이){ //set 데이터 변경
//         // if(나이가 숫자가 아니면)
//         this.age = parseInt(나이); //따움표 제거, 정수화
//     }
// }

// 사람.age = 20;
// 사람.setAge(20); //데이터 수정해주는 함수를 제작, 데이터 수정 시 미리 검사가능
// 사람.setAge = '30';

// console.log(사람.setAge(20))
// console.log(사람.nextAge())
// console.log(사람)


// 객체지향5. class르 복사하는 extends/super
//이거랑 유사한 class를 만들고 싶다면, (할아버지의 속성들 그대로 물려받아서)
// class 할아버지 { //class 하나 만들기
//     constructor(name, name2) { //name(param) 없으면 undefined
//         this.성 = 'Kim';
//         this.이름 = name;
//         this.이름2 = name2;
//     }
//     sayHi(){ //prototype
//         console.log('안녕 저는 할아버지에요.')
//     }
// }
// var 할아버지1 = new 할아버지('만덕', '덕수');
// console.log(할아버지1)

// extends해서 만든 class는 this 그냥은 못써요.
// class 아버지 extends 할아버지{
    // constructor(name, name2) {
    //     super(name, name2); //물려받는 class의 constructor라는 뜻;
        // super: 부모 class의 constructor를 의미
    //     this.나이 = 50;
    // }
    // sayHi() {
    //     console.log('안녕 저는 아버지에요.')
    //     super.sayHi(); // => console.log('안녕 저는 할아버지에요.')
        // super: 부모 class의 proptype을 의미, 가져다쓰기 가능
    // }
// }

//class를 extends해서 class를 새로 만들었습니다.
// var 아버지1 = new 아버지('만수', '덕만');
// console.log(아버지1.sayHi()) //가까운 프로토타입 출력

//super()의 또 다른 용도
// 할아버지 class => (prototype)sayHi();
// => 아버지 class
// => 아버지1 object

// 객체지향4. ES6방식으로 안쉽게 구현하는 상속기능(class)
// class 부모 {
//         //     constructor(aaa) {
//         //         this.name = aaa;
//         //         this.name = 'Kim';
//         //         //함수를 추가하고 싶으면
        // 1. constructor에 추가하든가(자식이 직접 함수를 가짐)
        // this.sayHi = function() {
        //     console.log('hello')
        // }
    // }
    // sayHi(){
    //     console.log('hello') //2.요기 쓰든가
            // (부모.prototype에 추가), 부모 유전자
    // }
    // sayHellow() {
        //     console.log('hello')
    // }
// }

// 부모.prototype.sayHello() = function() {

// }

// var 자식 = new 부모();
// 자식.__proto__ => 부모의 prototype
// console.log(자식.__proto__)
// console.log(Object.getPrototypeOf(자식))


//상속기능을 구현하는 ES5방법3. Object.creat(물려받을 부모 object)
//     var 부모 = {name : 'Kim' , age:50}
//     var 자식 = Object.create(부모)
//     console.log(자식)
//     console.log(자식.age)
//     자식.age = 20;
//     var 손자 = Object.create(자식)
//
//     손자.age;
//     console.log(손자.age)

    //__proto__ 부모가 누구인지 알 수 있다.

// new Object(); //부모가 있다.