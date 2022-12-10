{
  // discriminated -> 뜻: 차별화하는, 구분하는
  // 타입이 보장되면서 서로 다른 state를 간편하게 만들 수 있다.
  // SuccessState, FailState 는 구조가 다르지만
  // 공통된 result:string 를 갖기 때문에 이를 활용할 수 있다.

  // function: login -> success, fail ⏱
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    // state.result 는 'success' | 'fail'임을 알 수 있다.
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
