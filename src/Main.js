import React from 'react'
import logo from "./logo12.jpg"
import "./Main.css"

function Main() {
    return (
        <div>
            <div className='main-container'>
                <p className='per'>Say Hello To Always-On <strong>Marketing!</strong>
                    Because Customers Shop When They Want To.
                    Not When You Want Them
                </p><div />
                <p className="per1">Explore a world beyond Aggregators!</p>
                <div className='ver'>
                    <span className="ver1">Stop Driving customer to your competition. </span>
                    <span className="ver2"> Create sustainable options to harmful discounting.  </span>
                    <span className="ver3">Cultivate loyalty for your business, not third-party platforms.</span></div>
                < div className='drive'>
                    <h2><ul><li>Drive high-quality traffic to your website.</li><br />
                        <li>Optimize for more conversions!</li><br />
                        <li>Leverage collaborations to transform your website sales funnel.</li></ul></h2>

                    <img className="image" src={logo} alt=''></img> </div>

                <div className='per2'>
                    <span className='pv'>Partner with other Businesses</span> <br />
                    <span className='pv1'>Across Sectors, Online or Offline, Anywhere in the World. Instantly.</span><br />< br />
                    <span className='pv2'>Market Directly to their Customers</span><br />
                    <span className='pv3'>At the Moment of Transaction. Without Customer Data being shared.</span><br />< br />
                    <span className='pv4'>Retain Existing Customers</span><br />
                    <span className='pv5'>At Zero Cost, via Partner Rewards.</span>
                </div>
                

            </div>


        </div>
    )
}

export default Main