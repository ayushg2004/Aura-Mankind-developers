import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { jwttoken } from '../App'
const url = "https://cf-back-1.onrender.com/api/auth/investlogin"

const Investorlogin = () => {
    const {pitchideadata}=useContext(jwttoken)

    const navigate = useNavigate();
    const [info, setinfo] = useState("")
    const [style, setstyle] = useState("red")

    const [investlogin, setinvestlogin] = useState({
        email: "",
        personalkey: ""
    })

    const changevalue = (event) => {
        const name = event.target.name
        const value = event.target.value
        setinvestlogin({
            ...investlogin,
            [name]: value
        })
    }

    const submitform = async (event) => {
        event.preventDefault()

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(investlogin),
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (response.ok) {
            var values = await response.json();
            pitchideadata(values)

            setinfo("Login successfully.")
            setstyle("green")

            setTimeout(() => {
                navigate('/pitch')
            }, 500);
        }
        else {
            setinfo("Invalid credentials.")
        }
    }

    return (
        <>
            <div className="loginouterdiv">

                <div className="logindiv">

                    <div className="divgreen">
                    </div>
                    <div className='formdiv'>
                        <h1 className="loginzara">Investor - Login</h1>

                        <form action="" className="logininfo" onSubmit={submitform} >
                            <h3>Email</h3>

                            <input type="email" onChange={changevalue} value={investlogin.email} name='email' placeholder="Email" required />

                            <h3>Personalkey</h3>

                            <input type="password" onChange={changevalue} value={investlogin.personalkey} name='personalkey' placeholder="Personalkey" required />

                            <input className="submit" type="submit" value="Login" />

                            <h4 style={{ textAlign: "center" }}>Don't have account <NavLink to="/investsignup">Sign up</NavLink></h4>
                            <h4 style={{ textAlign: 'center', color: `${style}`, fontFamily: "sans-serif" }}>{info}</h4>
                        </form>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Investorlogin
