// 초기 State값 (=counter를 이용해서 만들 store에 들어갈 초기 상태 값)
const initialState = {
  number: 0,
};

// 리듀서(함수)만들기
const counter = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default counter;
