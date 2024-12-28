import React from "react";
import './Heroes.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
const Heroes = ()=>{
    return(
        <section className="hero-wrapper">
            <div className="innerWidth paddings flexCenter hero-container">

                {/* left side  */}

                <div className="flexColStart hero-left">
                    <div className="h-title">
                        <div className="h-circle"/>
                        <h1>
                        Discover<br/>
                        Most Suitable<br/>
                        Property
                        </h1>
                    </div>
                    <div className="flexColStart h-description">
                        <span className="secondaryText">Find a variety of properties that suit you very easilty</span>
                        <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
                    </div>
                    <div className="flexCenter h-searchBox">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={8000} end={9000} duration={4}/> <span>+</span>
                            </span>
                            <span className="secondaryText">Premium Product</span>
                        </div>
                        
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1400} end={2000} duration={4}/> <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customer</span>
                        </div>
                        
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={30} duration={4}/> <span>+</span>
                            </span>
                            <span className="secondaryText">Awards Winning</span>
                        </div>
                        
                    </div>
                </div>
                {/* right side */}
                <div className="hero-right">
                    <div className="image-container">
                        <img className="fit-image" src="./h-img.jpg" alt="hero-Image" />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Heroes;