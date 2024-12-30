import React from "react";
import './CompLogos.css';

const CompLogos = ()=>{
    return <section className="innerwidth flexCenter c-logos">
        <div className="c-logo">
            <img src="./equinix.png" alt="logo" />
        </div>
        <div className="c-logo">
            <img src="./prologis.png" alt="logo" />
        </div>
        <div className="c-logo">
            <img src="./realty.png" alt="logo" />
        </div>
        <div className="c-logo">
            <img src="./tower.png" alt="logo" />
        </div>
    </section>
}

export default CompLogos;