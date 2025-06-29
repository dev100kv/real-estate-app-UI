import React from 'react'

import {MdOutlineArrowDropDown} from 'react-icons/md';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import { useState } from 'react';
import "react-accessible-accordion/dist/fancy-example.css";

import data from '../../utils/accordion'

import './Value.css'

const Value = () => {
    const [className, setClassName] = useState(null)
    return (
        <section id='values' className="v-wrapper bg-gray bg-[#efefef]">
            <div className="p-[2rem] flex flex-wrap justify-center items-center gap-[2rem] container mx-auto">
                {/* Left Side */}
                <div className="v-left lg:flex-1">
                    <div className="image-container border-[8px] border-[#665f5f1f]">
                        <img src="./value.webp" alt="House Image" />
                    </div>
                </div>
                {/* Right Side */}
                <div className="v-right flex lg:flex-1 flex-col justify-center items-start gap-2">
                    <span className='orangeText text-[1.5rem] font-semibold text-orange-500'>Value</span>
                    <span className='primaryText text-[#1f3e72] font-bold text-[2rem]'>Value We Give to You</span>
                    <span className='SecondaryText'>
                        We always ready to help by providing the best services for You
                        <br />
                        We believe a good blace to live can make your life better
                    </span>

                    <Accordion
                        className='accordion mt-[2rem] border-none border-r-[2px]'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                        >
                        {data.map((item, i)=>{
                            
                                return(
                                    <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='accordionButton flex items-center flex-wrap lg:gap-[2rem]'>

                                            <AccordionItemState>
                                            {({ expanded })=> expanded ? setClassName('expanded'): setClassName('collapsed')}
                                            </AccordionItemState>

                                            <div className='flexCenter icon'>{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>

                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Value