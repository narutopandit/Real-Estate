import React from 'react';
import './Headers.css'
const Headers = () => {
    return <section className="h-wrapper">
        <div className="flexCenter innerWidth paddings h-container">
            <img src="./l2.png" alt="logo" width={250} height={60} />

            <div className="flexCenter h-menu">
                <a href="">Residencies</a>
                 <a href="">Our Value</a>
                 <a href="">Contact Us</a>
                 <a href="">Get Started</a>
                 <button className='button'>
                    <a href="">
                        Contact
                    </a>
                 </button>
            </div>
            
        </div>
    </section>
}

export default Headers;