import React from "react";

import './GettingStarted.css';

const GettingStarted =()=>{
    return(
        <section className="g-wrapper">
            <div className="paddings innerWidth g-conatainer">
                <div className="flexColCenter inner-container">
                    <span className="primaryText">Get started with Homyz</span>
                    <span className="secondaryText">Subscribe and find super attractive price quotes from us.
                    <br/>Find your residence soon</span>
                    <button className="button">
                        <a href="mailto:narutopandit220@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GettingStarted;