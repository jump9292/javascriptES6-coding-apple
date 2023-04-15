var person = new Map();
// var person = new Array();
person.set('name', 'Han'); //'name' 모든자료형이 가능하다.
person.set('age', 20)
person.set([1,2,3], 'Kim')
console.log(person.get('name')); //자료 꺼내기
// console.log(person.get()) =>undefined
console.log(person) //Map(1) { 'name' => 'Han' }
// person.delete('name')
//Map 자료형은 자료간의 연관성을 표현하기 위해 사용
console.log(person.size); //자료 꺼내기
// person.size

var person = new Map([
    ['name', 'Hna'],
    ['age', 20]
])

for (const key of person.keys()) {
    console.log(key)
}

