import React, { useState } from 'react'

// 컴포넌트 최적화를 위해 React.memo를 사용.
const TodoItem = React.memo(function TodoItem({ todo, onToggle }: any) {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  )
})

// 역시 React.memo를 사용.
const TodoList = React.memo(function TodoList({ todos, onToggle }: any) {
  return (
    <ul>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  )
})

function Todos({ todos, onCreate, onToggle }: any) {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야 하는 것은 아님.
  const [text, setText] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onCreate(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  )
}

export default Todos