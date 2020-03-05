import React from 'react'
import Counter from '../components/Counter'
import { useSelector, useDispatch } from 'react-redux'
import { CounterAction, increase, decrease, setDiff } from '../modules/counter'

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook.
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일.
  const { number, diff } = useSelector((state: CounterAction) => ({
    number: state.counter.number,
    diff: state.counter.diff
  }))

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용 할 수 있게 해주는 Hook.
  const dispatch = useDispatch()
  // 각 액션들을 디스패치 하는 함수.
  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())
  const onSetDiff = (diff: number) => dispatch(setDiff(diff))

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줌.
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  )
}

export default CounterContainer