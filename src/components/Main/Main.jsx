import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>AtomiQ</p>
            <img src={assets.user_icon} alt="" srcset="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello</span></p>
                <p>How Can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest me a material to use for professional jewelary coating</p>
                    <img src={assets.compass_icon} alt="" srcset="" />
                </div>
                <div className="card">
                    <p>Give me some ideas to innovate the carbon usage in construction</p>
                    <img src={assets.bulb_icon} alt="" srcset="" />
                </div>
                <div className="card">
                    <p>Give me some ways to have better coating than with Galvanisation</p>
                    <img src={assets.message_icon} alt="" srcset="" />
                </div>
                <div className="card">
                    <p>Give me some ways to have better coating than with Galvanisation</p>
                    <img src={assets.code_icon} alt="" srcset="" />
                </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" srcset="" />
                        <img src={assets.mic_icon} alt="" srcset="" />
                        <img src={assets.send_icon} alt="" srcset="" />
                    </div>
                </div>
                <p className="bottom-info"> Information displayed it a result of training the data available </p>
            </div>
        </div>
    </div>
  )
}

export default Main