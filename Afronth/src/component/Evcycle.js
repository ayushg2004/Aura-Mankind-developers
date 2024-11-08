import React, { useState,useEffect } from 'react'
import { Link, Navigate, NavLink, redirect, useNavigate } from 'react-router-dom'
import Footer from './Footer';


const Evcycle = () => {
  
  const navigate = useNavigate();

  var data = [

    {
      city : "Kolkata",
      img : "images/Kolkata.jpg",
      stations : [
        {
          name : "A",
          battery : 78,
          cycle : 12,
          cost : 1000,
        },
        {
          name : "B",
          battery : 70,
          cycle : 3,
          cost : 900,
        },
        {
          name : "C",
          battery : 89,
          cycle : 18,
          cost : 1000,
        },

      ]
    },
    {
      city : "Chandigarh",
      img : "images/Chandigarh.jpg",
      stations : [

        {
          name : "A",
          battery : 78,
          cycle : 12,
          cost : 1000,
        },
        {
          name : "B",
          battery : 70,
          cycle : 3,
          cost : 900,
        },
        {
          name : "C",
          battery : 89,
          cycle : 18,
          cost : 1000,
        },
        {
          name : "D",
          battery : 91,
          cycle : 15,
          cost : 1200,
        },


      ]
    },
    {
      city : "Ludhiana",
      img : "images/Ludhiana.jpg",
      stations : [

        {
          name : "A",
          battery : 78,
          cycle : 12,
          cost : 1000,
        },
        {
          name : "B",
          battery : 70,
          cycle : 3,
          cost : 900,
        },
       

      ]
    },
    {
      city : "Delhi",
      img : "images/Delhi.jpg",
      stations : [

        {
          name : "A",
          battery : 78,
          cycle : 12,
          cost : 1000,
        },
        {
          name : "B",
          battery : 70,
          cycle : 3,
          cost : 900,
        },
        {
          name : "C",
          battery : 89,
          cycle : 18,
          cost : 1000,
        },

      ]
    },
    {
      city : "Bangolore",
      img : "images/Banglore.jpg",
      stations : [

        {
          name : "A",
          battery : 78,
          cycle : 12,
          cost : 1000,
        },
        {
          name : "B",
          battery : 70,
          cycle : 3,
          cost : 900,
        },
        {
          name : "C",
          battery : 89,
          cycle : 18,
          cost : 1000,
        },

      ]
    },
    {
      city : "Pune",
      img : "images/pune.jpg",
      stations : [

        {
          name : "A",
          battery : 78,
          cycle : 12,
          cost : 1000,
        },
        {
          name : "B",
          battery : 70,
          cycle : 3,
          cost : 900,
        },
        {
          name : "C",
          battery : 89,
          cycle : 18,
          cost : 1000,
        },

      ]
    },
    {
      city : "Bangolore",
      img : "images/Banglore.jpg",
      stations : [

        {
          name : "A",
          battery : 78,
          cycle : 12,
          cost : 1000,
        },
        {
          name : "B",
          battery : 70,
          cycle : 3,
          cost : 900,
        },
        {
          name : "C",
          battery : 89,
          cycle : 18,
          cost : 1000,
        },

      ]
    },
    {
      city : "Rajpura",
      img : "images/Rajpura.jpg",
      stations : [

        {
          name : "A",
          battery : 78,
          cycle : 12,
          cost : 1000,
        },
        {
          name : "B",
          battery : 70,
          cycle : 3,
          cost : 900,
        },
        {
          name : "C",
          battery : 89,
          cycle : 18,
          cost : 1000,
        },

      ]
    }

  ];

  var [searched, setSearched] = useState([]);

  const search = (val) => {

    var x = val.toLowerCase();

    var abc = new Array();

    Promise.all(data.map(d => {

      var y = d.city.toLowerCase()

      if(y.includes(x))
      {
        abc.push(d);
      }

    }))

    setSearched(abc);

    if(searched.length < 1)
    {
      alert("No Data Found");
    }

  }

  const onDetails = (d) => {

    localStorage.setItem("details", JSON.stringify(d));

    // window.location.href = "evcycle/stations";

    navigate("/stations")

  }


  const [navbarColor, setNavbarColor] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setNavbarColor(true);
            } else {
                setNavbarColor(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
  return (
    <>

<center>

        <div className='innerdiv'>
        <div>
                    <nav className={`navbar ${navbarColor ? 'navbar-white' : ''}`}>
                    
                            <ul className="navbar">
                            <div className='logo1'><li><img className="logo" src="Pimages/logo.png" alt="Logo" /></li></div>
                                <li><NavLink to="/knowledge" >Aura-Knowledge</NavLink></li>
                                <li><NavLink to="/evcycle" >Aura-Bikes</NavLink></li>
                                <li><NavLink to="/askpitchorinvest" >Pitch/Invest</NavLink></li>
                                <li><NavLink to="/Footer">Contact Us</NavLink></li>
                                <li><NavLink to="/Login">Login/Signup</NavLink></li>
                                <li><NavLink to="/Login">Help</NavLink></li>
                                
                            </ul>
                        </nav>
                    </div>
        </div>

        </center>

    <div style={{padding:"10px", marginTop:"-60px"}}>
      
    <div className="flex">
        <input onChange={(e) => search(e.target.value)} type='text' placeholder=' SEARCH... ' />
        <img className='searchimg' src='Pimages/search.png' alt='not found'></img>
      </div>

      <br />
      <br />
      <br />
      <br />
      
      <h2 style={{textAlign:"center"}}>
        AURA BIKES
      </h2>

      <br />

      <div className='pitchflex'>

          {

            searched.length > 0

            ?
            searched.map((d, i) => {

              return(

                <div key={i}>

                  

                    <div className="card" style={{ width: "22rem" }}>
                      <img className="card-img-top" target='_blank' src={d.img} alt="not found" />
                      <div className="card-body">
                        <h3 className="card-title">{d.city}</h3>
                        <p className="card-text">Stations : {d.stations.length}</p>
                        
                        <button style={{cursor:"pointer"}} onClick={() => onDetails(d)} className="btn btn-primary">Details</button>

                      </div>
                    </div>

                  </div>
              )

            })


            :

            data.map((d, i) => {

              return(

                <div key={i}>

                  

                    <div className="card" style={{ width: "22rem" }}>
                      <img className="card-img-top" target='_blank' src={d.img} alt="not found" />
                      <div className="card-body">
                        <h3 className="card-title">{d.city}</h3>
                        <p className="card-text">Stations : {d.stations.length}</p>
                        
                        <button style={{cursor:"pointer"}} onClick={() => onDetails(d)} className="btn btn-primary">Details</button>

                      </div>
                    </div>

                  </div>
              )

            })

          }

      </div>


    </div>

    <Footer />

    </>
  )
}

export default Evcycle
