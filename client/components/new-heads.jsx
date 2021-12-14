import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import {addHeads} from '../actions/index'
import { useDispatch } from 'react-redux'



//In here I should 
//1.create a state to manage the values from the users selection on the form
//2. Create a submit handler to manage submitting the form data - it should preventDefault to ensure it doesn't try and navigate away
//3. The submit handler calls an action (stored in the action.js file)

function newHeads () {
const dispatch = useDispatch()
const [formData, setFormData] = useState()

const submitHandler  = (e) => {
  e.preventDefault()
  dispatch(addHeads(formData))
  //Call function action from action.js
  
}


const onChangeHandler = (e) => {
  setFormData({
    ...formData, [e.target.name]: e.target.value
  })
  
}

  return (
    <>

<div  className="main-home-div">

<form className="head-form" onSubmit={submitHandler}>
  <label htmlFor="">Summary</label>
  <input onChange={onChangeHandler} name="summary" type="text"/>


<label htmlFor="type">Type of Heads Up</label>
<select onChange={onChangeHandler} name="type" id="">
  <option value="1">Aggressive Behaviour</option>
  <option value="3">Other</option>
  <option value="2">Theft</option>
</select>


<label htmlFor="Location">Location</label>
<input onChange={onChangeHandler} type="location" name="location" id=""/>
<br />



  <button type="submit" href="/">Create</button>

</form>

</div>


    </>
  )
}

export default newHeads