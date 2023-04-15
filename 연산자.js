// optional chaining 연산자
// ?. 왼쪽이 null, undefined면
// 점안찍어주고 undefined 남겨줌
// 중첩된 object자료에서 자료뽑을 때,
// reference 에러없이 안저하게 뽑을 수 있음

var user = {
    name : 'Han',
    // age : {value : 20} //오브젝트 자료형
    // age : 20
};
// console.log(user.age.value); //undefined.value(에러남), null.value(에러남)
// console.log(user?.age);
// console.log(user.age?.value);

// document.querySelector('#a')?.innerHTML
//꼭 필요할때,

//??nullish coalescing 연산자
// 왼쪽이 undefined, null이면 '으잉'을 보여주세요.
console.log(null ?? '으잉')

var user;
console.log(user ?? '로딩중')
// console.log(user)