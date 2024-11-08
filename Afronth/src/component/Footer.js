import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <h2>Lets's Connect</h2>
                <p style={{ marginBottom: '10px' }}>Renewable energy offers reducing carbon emissions</p>
                <div>
                    <input type="text" placeholder=' Enter Email' />
                    <button>Submit</button>
                </div>

                <div className='lastdivfooter'>
                    <p>All rights are reserved for this website</p>

                    <div style={{ marginRight: '180px' }}>
                        <img className='Adimg' src='Pimages/insta.webp' alt='youtube img' />
                        <img className='Adimg' src='Pimages/y.png' alt='youtube img' />
                        <img className='Adimg' src='Pimages/f.png' alt='youtube img' />
                    </div>

                    <p>T&C Apply</p>

                </div>

            </div>
        </div>
    )
}

export default Footer
