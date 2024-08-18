// 초기 State값 (=counter를 이용해서 만들 store에 들어갈 초기 상태 값)
const initialState = {
  number: 0,
};

// const PULS_ONE = "PULS_ONE"; // value는 상수로 생성 (상수는 보통 대문자)
// const MINUS_ONE = "MINUS_ONE";

const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

export const addNumber = (payload) => {
  return {
    type: ADD_NUMBER,
    payload: payload,
  };
};

export const removerNumber = (payload) => {
  return {
    type: REMOVE_NUMBER,
    payload: payload,
  };
};

// 리듀서(함수)만들기
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      return {
        number: state.number + action.payload,
      };
    case REMOVE_NUMBER:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
