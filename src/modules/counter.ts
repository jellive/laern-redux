// 액션 타입 만들기
// Ducks 패턴을 따를 땐 액션의 이름에 접두사를 넣으면 됨.
const SET_DIFF = 'counter/SET_DIFF'
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// 액션 함수 만들기
// export로 내보내야 함.
export const setDiff = (diff: number) => ({ type: SET_DIFF, diff })
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

// 초기 상태 선언
const initialState = {
  number: 0,
  diff: 1
}

// 리듀서 선언
// 리듀서는 export default로 내보내야 함.
export default function counter(state = initialState, action: any) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }
    default:
      return state
  }
}
