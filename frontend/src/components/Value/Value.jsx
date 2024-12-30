import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
    return <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left  */}
            <div className="v-left">
                <div className="image-container">
                    <img className="fit-image" src="./h-img2.jpg" alt="hero-Image" />
                </div>
            </div>
            {/* right  */}
            <div className="flexColStart v-right">
                <span className="orangeText">Our Value</span>
                <span className="primaryText">Value We Give to You</span>
                <span className="flexColStart">
                    <span className="secondaryText">We always ready to help by providijng the best services for you.</span>
                    <span className="secondaryText">We beleive a good blace to live can make your life better</span>
                </span>

                <Accordion className="accordian"
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((Item,i)=>{
                            const [className,setClassName] = useState(null);
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">

                                            <AccordionItemState>
                                                {({expanded})=>expanded ? setClassName("expanded") : setClassName("collapsed") }
                                            </AccordionItemState>

                                            <div className="flexCenter icon">{Item.icon}</div>
                                            <span className="primaryText">{Item.heading}</span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">{Item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
}
export default Value;