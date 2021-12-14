import React, { useEffect, useState } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {viewHeads} from '../actions'
import { useSelector } from 'react-redux'



function home () {


  const headData = useSelector(redux => redux.heads)
  

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(viewHeads())

    }
  , [])


console.log("thisi si head adata" + headData)

  

  return (
    <>

<h1 className="homepage-title">HEADS UP</h1>



<div className="include-heading">
  <h2>Heads Up near me...</h2>
</div>

<div className="main-home-div">
  <img className="map-image" src="images/placeholdermap.png" alt=""/>

  <div className="list-of-heads-ups">
    
    <ul>    
      <li>{headData.id}</li> 
      {headData.map(head => 
       <li>{head.summary}</li> 
      )}
 
    </ul>
      <button className="create-button"><Link to="/create" > Raise a Heads Up</Link></button>
  </div>

</div>




    </>
  )
}

export default home