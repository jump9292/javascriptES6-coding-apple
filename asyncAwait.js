//프로미스 오브젝트를 기능을 한다.
//성공만 판정할 수 있다.
async function 더하기() {
    // return 1+1;
    // return Promise.reject('실패함')
    // 콜백();
    var 프로미스 = new Promise(function (성공, 실패) {
        var 힘든연산 = 1 + 1;
        성공(힘든연산);
        // 실패(100);
    });
    
    // 프로미스.then(function () {
    //     console.log('성공했어요.')
    // })

    // <== 간략한버전
    try {
        //이걸해보고에서나면
        var 결과 = await 프로미스; //기다려주세요, 프로미스가 해결될 때까지 기다려
        //async 안에서만 사용할 수 있다.
        console.log(결과);
    } catch (e) {
        console.log('프로미스 연산이 잘 안되었군요.', e);
    }
}

더하기();

// 더하기().then(function(결과) { //async 키워드로 프로미스를 리턴한다.
//     // console.log("성공이에요.")
//     console.log(결과)
// })

