import React, { useContext } from 'react'
import { jwttoken } from '../App';

const Showidea = () => {
    const {arr}=useContext(jwttoken)
  return (
    <div>
      {
        arr.map((ele)=>{
            return  <div className="card" style={{ width: "16rem" }}>
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
  
    </div>
  )
}

export default Showidea
