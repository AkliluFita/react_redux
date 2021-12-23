
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, addBug, removeBug} from './actions/actions';



function App() {

const counter = useSelector(state => state.counter)
const isLoggedIn = useSelector(state => state.isLoggedIn)
const bug = useSelector(state => state.bug)


console.log(bug);
const dispatch = useDispatch()



  return (
    <div>
      <h1>hello how are you</h1>
      <h1>counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5)) }>+</button>
      <button onClick={() => dispatch(decrement()) }>-</button>
      <button onClick={() => dispatch(addBug()) }>add the bug object</button>
      <button onClick={() => dispatch(removeBug()) }>remove the bug object</button>

      {isLoggedIn? <h1>yes i am logger in </h1>:
      'nothing here'}

    </div>
  )
}

export default App

