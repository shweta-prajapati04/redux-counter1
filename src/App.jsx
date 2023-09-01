import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from './redux/Action';

function App() {
  let count = useSelector((count) => count)
  let dispatch = useDispatch();
  return (
    <>
    <h3>Redux Counter</h3>
      <div  className='btn btn-outline-primary' ><h2>{count}</h2></div>
      <br></br><br></br>
      <button className='btn btn-outline-dark ml-5' onClick={() => dispatch(add())}>Add</button>&nbsp;&nbsp;
      <button className='btn btn-outline-dark' onClick={() => dispatch(remove())}>Remove</button>
    </>
  )
}

export default App
