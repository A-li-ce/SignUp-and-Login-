import React, { useState } from 'react'
import './style.css'

import prsn_icon from '../Assets/prsn.png'
import email_icon from '../Assets/email.png'
import pass_icon from '../Assets/pass.png'

function Login_signUp() {

    const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
      <div className="header">
        <div className="txt">
            {action}
        </div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        
        {action==="Login"?<div></div>  
            :
             <div className="input">
                <img src={prsn_icon} alt="" />
                <input type="text" placeholder='Name'/>
             </div>
        }

        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email Id'/>
        </div>
        <div className="input">
            <img src={pass_icon} alt="" />
            <input type="password" placeholder='Password' />
        </div>
      </div>
        
        {action==="Login" ? <div className="forgot-password"> Password Forgotten? <span> Click here!</span></div>
            :
        <div> </div>
        }

        <div className="submit-container">
            <div className={action==="Login"?"submit grey":"submit"} onClick={()=>{setAction("Sign Up")}}> Sign Up</div>
            <div className={action==="Sign Up"?"submit grey":"submit"} onClick={()=>{setAction("Login")}}> Login</div>
        </div>

    </div>
  )
}

export default Login_signUp
