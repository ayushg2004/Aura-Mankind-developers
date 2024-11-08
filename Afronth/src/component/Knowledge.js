import React from 'react'
import { Cursor, Typewriter } from 'react-simple-typewriter'
import Footer from './Footer'

const Knowledge = () => {
  const text = Typewriter({
    words: [' Eco-friendly power', " Tomorrow's shining promise", " Earth's sustainable embrace"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 40
  })

  return (
    <>
      <div className='knowledge'>
        <h1 style={{ color: 'green', textAlign: 'center' }}>Renewable Energy:
          <span style={{ fontFamily: "Lobster, sans-serif", color: 'black' }}>
            {text}
            <Cursor />
          </span>
        </h1>

        <hr />
        <div className='knowdiv'>

          <div style={{ width: '55%', marginTop: "20px" }}>

            <br />
            <br />
            <h2>Inrtoduction</h2>
            <p>Those energy resources available in nature, which will never end called Renewable energy. Therefore some of the renewable energies are Wind energy, Solar energy, Geothermal energy, and Bio-energy, etc. These energy resources are available for us free of cost, and also we can use them without fear of their end one day.</p>

            <br />
            <h2>Benefits of Renewable Energy</h2>
            <p>
              Renewable Energy is full of many advantages. First of all, it is never going to end, we can use them for a long time and various purposes. Also, they generate energy in a large amount and efficiently. The most important benefit of renewable energy is that it is eco-friendly and don’t contribute to environmental pollution.</p>
            <br />

            <h2>Need for Renewable Energy</h2>
            <p>Seeing the increasing population of the world, the demand for renewable energy has increased. However we can satisfy the need of the entire population only through it.</p>
            <br />

            <h2>Demand in India</h2>
            <ul>
              <li><strong> Government Initiatives: </strong> The Indian government has been promoting renewable energy through various schemes and policies such as the National Solar Mission and the Wind Energy Mission. These initiatives aim to increase the adoption of renewable energy sources like solar, wind, and hydroelectric power.</li>
              <li><strong>Energy Security: </strong>India's growing population and rapid urbanization have led to an increased demand for energy. Renewable energy offers a more secure and sustainable alternative to fossil fuels, reducing dependency on imported oil and gas.</li>
              <li><strong>Environmental Concerns: </strong>
                With growing awareness of environmental issues such as climate change and air pollution, there is a greater emphasis on cleaner sources of energy. Renewable energy helps to reduce greenhouse gas emissions and mitigate environmental degradation.
              </li>
              <li><strong>Technological Advancements: </strong>Advances in renewable energy technologies have made them more efficient and cost-effective, making them increasingly competitive with conventional energy sources. This has further boosted the demand for renewable energy in India.</li>
            </ul>
            <br />

            <h2>Types of Renewable energy: </h2>
            <ul>
              <li>Solar Energy</li>
              <li>Wind Energy</li>
              <li>Hydropower</li>
              <li>Biomass Energy</li>
              <li>Geothermal Energy</li>
              <li>Tidal Energy</li>
            </ul>
            <br />

            <h2>Conclusion</h2>
            <p>Only <strong style={{ color: 'green' }}> Renewable Energy</strong> can save and secure our future. Since pollution is the greatest threat now, it can save the environment and the earth as well.The adoption of renewable energy in India is driven by various factors, including government policies and incentives, environmental concerns, technological advancements, and investment opportunities. These factors have led to significant growth in renewable energy capacity and infrastructure development across the country.</p>
            <br />
          </div>

          <img className='knowimg' src="images/bg8.jpg" alt="not found" />
        </div>

        <hr />
        <div>
          <h1 style={{textAlign:'center'}}>Latest Articles</h1>

          <div className='flex' style={{ marginLeft:'120px' }}>

            <div className="card" style={{ width: "16rem" }}>
              <img className="card-img-top" src="images/bg6.jpg" alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">Wind Energy's New Frontier: Floating Turbines</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://energy.economictimes.indiatimes.com/news/Renewable" target='_blank' className="btn btn-primary">Read more</a>
              </div>
            </div>
            <div className="card" style={{ width: "16rem" }}>
              <img className="card-img-top" src="images/bg1.jpeg" alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">Advancements in Battery Technology Propel Energy</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://energy.economictimes.indiatimes.com/news/Renewable" target='_blank' className="btn btn-primary">Read more</a>
              </div>
            </div>
            <div className="card" style={{ width: "16rem" }}>
              <img className="card-img-top" src="images/bg7.jpg" alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">New Solar Panel Efficiency Breakthrough</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://energy.economictimes.indiatimes.com/news/Renewable" target='_blank' className="btn btn-primary">Read more</a>
              </div>
            </div>
            <div className="card" style={{ width: "16rem" }}>
              <img className="card-img-top" src="images/bg9.avif" alt="Card image cap" />
              <div className="card-body">
                <h3 className="card-title">Sustainable Energy Solutions for a Greener World</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="https://energy.economictimes.indiatimes.com/news/Renewable" target='_blank' className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>





        <Footer />
      </div>

    </>
  )
}

export default Knowledge