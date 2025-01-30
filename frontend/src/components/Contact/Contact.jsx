import React from "react";
import './Contact.css';
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
 
const Contact = ()=>{
    return(
        <section className="c-wrapper">
            <div className="paddings innerwidth flexCenter c-container">
                {/* left side  */}
                <div className="flexColStart c-left">
                    <span className="orangeText">Our Contact Us</span>
                    <span className="primaryText">Easy to contact us</span>
                    <span className="secondaryText">We always ready to help by providing the best services for you. We beleive a good<br/>place to live can make your life better</span>
                    
                    <div className="flexColStart contactModes">
                        {/* first row 1 */}
                        <div className="flexStart row">
                            {/* mode 1 */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Call</span>
                                        <span className="secondaryText">456 567 7678</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Call now</div>
                            </div>
                            {/* mode 2 */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Chat</span>
                                        <span className="secondaryText">456 567 7678</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Now</div>
                            </div>
                        </div>
                        {/* row 2 */}
                        <div className="flexStart row">
                            {/* mode 1 */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">VedioCall</span>
                                        <span className="secondaryText">456 567 7678</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">VedioCall now</div>
                            </div>
                            {/* mode 2 */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="primaryText">Message</span>
                                        <span className="secondaryText">456 567 7678</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Message Now</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* right side  */}
                <div className="c-right">
                <div className="c-image-container">
                    <img className="fit-image" src="./c-image.jpg" alt="hero-Image" />
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;

