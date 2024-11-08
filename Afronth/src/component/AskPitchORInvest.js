import React from 'react'
import { NavLink } from 'react-router-dom'
const AskPitchORInvest = () => {
  let name = localStorage.getItem('name');
  if(name==null)
  {
    name='User'
  }
  return (
    <div className='askpitchorinvest'>
      <h2>Hey, {name} you come here for :-</h2>

      <div>
      <NavLink title='pitch' className="ask" to="/pitch">Pitch</NavLink>
      <NavLink title='invest' className="ask" to="/investlogin">Invest</NavLink>
      </div>

    </div>
  )
}

export default AskPitchORInvest
