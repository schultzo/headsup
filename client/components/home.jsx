import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'


function home (props) {
  console.log(props)
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
        <li>test 1</li>
        <li>test 2</li>
        <li>test 3</li>
        <li>test 4</li>
    </ul>
      <button className="create-button"><Link to="/create" > Raise a Heads Up</Link></button>
  </div>

</div>




    </>
  )
}

export default home