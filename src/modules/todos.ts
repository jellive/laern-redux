// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO'
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// 액션 생성함수 선언
let nextId = 1 // todo 데이터에서 사용 할 고유 id
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
})

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  id
})

// 초기 상태 선언
// 리듀서의 초기 상태는 꼭 객체타입일 필요가 없음.
// 배열이어도 되고, 원시타입(number, string 등)이어도 관계 없음.
const initialState: any[] = [
  /*
  {
    id: 1,
    text: '예시',
    done: false
  }
  형태로 넣을 것.
  */
]

export default function todos(state = initialState, action: any) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo)
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      )
    default:
      return state
  }
}
