import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [ToggleState, setToggleState] = React.useState(1);

    const ToggleTab = (index) => {    
        setToggleState(index);
    }
        

  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className='section__subtitle'>My personal journey</span> 

        <div className="qualification__container container grid">
            <div className="qualification__tabs">   
                <div className={ToggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => ToggleTab(1)} data-target="#education"> 
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={ToggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => ToggleTab(2)} data-target="#experience">
                    <i className='uil uil-briefcase-alt qualification__icon'></i>
                    Experience
                </div>
            </div>
            <div className="qualification__sections">
                <div className={ToggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"} data-content id="education">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech</h3>
                            <span className="qualification__subtitle">PES University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2022 
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>                    

                    <div className="qualification__data">
                        <div></div>

                        <div>    
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">M.Tech</h3>
                            <span className="qualification__subtitle">PES University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2024 
                            </div>
                        </div>
                    </div>
                </div>                

                <div className={ToggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"} data-content id="experience">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Frontend developer</h3>
                            <span className="qualification__subtitle">PES University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2024 
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>                    

                    <div className="qualification__data">
                        <div></div>

                        <div>    
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Backend developer</h3>
                            <span className="qualification__subtitle">PES University</span>
                            <div className="qualification__calendar">        
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2024 
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>       
    </section>

  )
}

export default Qualification