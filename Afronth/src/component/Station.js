import React, { useState, useEffect} from 'react'
import { Link, Navigate, NavLink, redirect, useNavigate } from 'react-router-dom'
import Footer from './Footer';


const Station = () => {
  
  const navigate = useNavigate();

  var data = JSON.parse(localStorage.getItem("details"));
  

  
  return (
    <>
        <center>

        <div className='innerdiv'>
          
        </div>

        </center>

    <div style={{padding:"10px", marginTop:"40px"}}>
      <h2 style={{textAlign:"center"}}>
        AURA EV STATIONS
      </h2>

      <br />
      <br />
      <br />

      <div className='pitchflex'>

          {

            data.stations.map((d, i) => {

              return(

                <div key={i}>

                  {/* {JSON.stringify(d)}

                  <br />
                  <br /> */}

                  {/* <div className='outsidepitchdiv'> */}
                  

                    <div className="card" style={{ width: "22rem" }}>
                      <img className="card-img-top" target='_blank' src={data.img} alt="not found" />
                      <div className="card-body">
                        <h3 className="card-title">Aura Station {d.name}, {data.city}</h3>
                        <p className="card-text">Battery : {d.battery}%</p>
                        <p className="card-text">Aura Bikes : {d.cycle}</p>
                        <p className="card-text">Cost Per Day : {d.cost}</p>
                        
                        {/* <Link className="btn btn-primary" to="stations">Details</Link> */}

                        <button style={{cursor:"pointer"}} onClick={() => {
                          alert("Your Bike Has Been Booked Successfully...")
                        }} className="btn btn-primary">Book Now</button>

                      </div>
                    </div>

                  </div>


                // </div>
                // </div>


              )

            })

          }

      </div>


    </div>

    <Footer />

    </>
  )
}

export default Station
