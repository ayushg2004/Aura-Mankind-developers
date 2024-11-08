import React, { useEffect, useState } from 'react'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Pitch = () => {
  const [arr1,setarr1]=useState([])

  let name = localStorage.getItem('name');
  const email=localStorage.getItem('email')

  // useEffect(()=>{
  //   (async () => {
  //       const response = await fetch('http://localhost:3001/api/auth/searchidea', {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify()
  //       })
    
  //       if (response.ok) {
  //         const data = await response.json();
  //         // console.log(data)
  //         setarr1(data)
  //       }
  //     })();
  //   },[])

  if (name == null) {
    name = 'User'
  }
  return (
    <>
      <h1 className='welcome'>WELCOME, {name}</h1>

      <Link className='pitchidea' to="/pitchidea">Pitch-Idea</Link>
      <hr />

      <div className='outsidepitchdiv'>
        <h1 style={{ fontFamily: "Sedan ,serif" }}>Trending Pitches</h1>
        <div className='pitchflex'>

          <div className="card" style={{ width: "22rem" }}>
            <img className="card-img-top" target='_blank' src="images/bg1.jpeg" alt="not found" />
            <div className="card-body">
              <h3 className="card-title">EV Charging station</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
            </div>
          </div>

          <div className="card" style={{ width: "22rem" }}>
            <img className="card-img-top" target='_blank' src="images/bg2.jpg" alt="not found" />
            <div className="card-body">
              <h3 className="card-title">Wind mills</h3>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
            </div>
          </div>

        </div>
      </div>
      <hr />

      <div>
        <h1 style={{ fontFamily: "Sedan ,serif", textAlign: "center" }}>Latest One's</h1>
      </div>
      <div className='pitchless'>


        {
          arr1.map((ele,ind) => {
            return <div key={ind} className="card" style={{ width: "16rem" }}>
              <img className="card-img-top" target='_blank' src="images/bg2.jpg" alt="not found" />
              <div className="card-body">
                <h3 className="card-title">{ele.title} </h3>
                <p className="card-text">{ele.about}</p>
                <p className="card-text">Email: {ele.email}</p>
                <p className="card-text">Number: {ele.number}</p>
                <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
              </div>
            </div>

          })
        }

      
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" target='_blank' src="images/bg3.jpg" alt="not found" />
          <div className="card-body">
            <h3 className="card-title">Renewable energy</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" target='_blank' src="images/bg4.jpg" alt="not found" />
          <div className="card-body">
            <h3 className="card-title">Sustainable Energy spot</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" target='_blank' src="images/bg5.jpg" alt="not found" />
          <div className="card-body">
            <h3 className="card-title">Card title Renewable</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" target='_blank' src="images/bg3.jpg" alt="not found" />
          <div className="card-body">
            <h3 className="card-title">Solar power station</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" target='_blank' src="images/bg2.jpg" alt="not found" />
          <div className="card-body">
            <h3 className="card-title">Energy Title 1 </h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" target='_blank' src="images/bg1.jpg" alt="not found" />
          <div className="card-body">
            <h3 className="card-title">Card title 2 EV</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" target='_blank' src="images/bg2.jpg" alt="not found" />
          <div className="card-body">
            <h3 className="card-title">Wind Power Energy</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" target='_blank' src="images/bg1.jpeg" alt="not found" />
          <div className="card-body">
            <h3 className="card-title">Sustainable Energy</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://energy.economictimes.indiatimes.com/news/Renewable" className="btn btn-primary">Read more</a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Pitch
