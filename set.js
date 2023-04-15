//집합, Array와 유사하다.
//set은 중복을 허용하지 않는다.

var 출석부 = ['john', 'tom', 'andy', 'tom']

var 출석부2 = new Set(['john', 'tom', 'andy', 'tom'])

출석부 = [...출석부2]; //set자료형 <=> Array 자료형

// 출석부2.add('sally')
console.log(출석부)
// console.log(출석부2)
// console.log(출석부2.size)



