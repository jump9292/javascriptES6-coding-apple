// console.log(1)
//web API 실행, 비동기
// setTimeout(function() {
//     console.log(2)
// }, 1000)
// addEventListener('click', 함수);

// function first(구멍) {
//     console.log(1)
//     구멍();
// }

// function second() {
//     console.log(2)
//
// }

// first(second);

// first(function() {
//     second(function() {
//         third(function() {
//
//         })
//     })
// });

// Promise => 코드 디자인 패턴
// first().then(function() {
//
// }).then(function() {
//
// });


// 특별한 오브젝트
// resolved 성공, pending 판정대기중, rejected 상태가 3가지가 있다.
var 프로미스 = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve();
    }, 5000)
    // var 어려운연산 = 1 + 1;
    // resolve(어려운연산); //성공판정
    // reject();
}); //성공/실패 판정 기계

// $.ajax.done(function() {
// })

// fetch().then().catch()

프로미스 //코딩 스타일
    .then(function(결과) {
    // .then(function(결과) {
    //프로미스가 성공일 경우 실행
        console.log('성공했어요.')
        // console.log('결과=> ', 결과)
})
    .catch(function () {
        console.log('실패했어요.')

})
    .then(function() {

})
    .finally(function() {

})

