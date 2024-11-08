import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { jwttoken } from '../App';
const Pitchidea = () => {
    const navigate = useNavigate();
    const {pitchideadata} =useContext(jwttoken)
    const [info, setinfo] = useState('')
    const [style, setstyle] = useState('red')

    const [pitch, setpitch] = useState({
        title: "",
        topic: "",
        about:"",
        email: "",
        number: ""
    })

    const valuechange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setpitch({
            ...pitch,
            [name]: value
        })
    }

    const submitform = async (event) => {
        event.preventDefault();

        const response = await fetch('https://cf-back-1.onrender.com/api/auth/pitchidea', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pitch)
        })
        if (response.ok) {
            setinfo("Account created successfully.")
            setstyle("green")
            setpitch({
                title: "",
                topic: "",
                about:"",
                email: "",
                number: ""
            })
            const data=await response.json();
            // console.log(data)
            pitchideadata(data)

            setTimeout(() => {
                navigate('/pitch')
              }, 500);
        }
        else {
            setinfo("Account exist.")
        }
    }
    return (
        <>
            <div className="outerdiv">

                <div className="logindivsignup">

                    <div className='formdiv' style={{marginLeft:"150px"}}>
                        <h1 className="loginzara" style={{marginLeft:"390px"}}>Pitch Form</h1>

                        <form action="" className="logininfosignup" onSubmit={submitform}>

                            <div style={{display:'flex' }}>

                            <div>
                            <h3>Title</h3>
                            <input type="text" onChange={valuechange} value={pitch.title} name='title' placeholder="Title" required />

                            <h3>Topic</h3>
                            <input type="text" onChange={valuechange} value={pitch.topic} name='topic' placeholder="Topic" required />

                            <h3>Description</h3>
                            <textarea type="text" name="about" onChange={valuechange} placeholder='Description' value={pitch.about}  cols="30" rows="10"></textarea>

                            </div>

                            <div style={{marginLeft:"80px"}}>

                            <h3>Email</h3>
                            <input type="email" onChange={valuechange} value={pitch.email} name='email' placeholder="Email" required />

                            <h3>Number</h3>
                            <input type="number" onChange={valuechange} value={pitch.number}  name="number" placeholder='Number' />

                            </div>
                            </div>

                            <input className="submit" type="submit" value="Sign up" style={{marginLeft:"160px"}} />
                            <h4 style={{textAlign:"center"}}>Have account? <NavLink to='/investlogin'>Login</NavLink></h4>
                            <h4 style={{ textAlign: 'center', color: `${style}`, fontFamily: "sans-serif" }}>{info}</h4>

                        </form>

                    </div>


                </div>

            </div>
        </>
    )
}

export default Pitchidea
