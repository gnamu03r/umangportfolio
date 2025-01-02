import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className="uil uil-award about__icon"></i>
            <h3 className="about__title">Experience</h3>    
            <span className="about__subtitle">Fresher</span>
        </div>

        <div className="about__box">            
            <i className="uil uil-briefcase-alt about__icon"></i>
            <h3 className="about__title">Projects</h3>
            <span className="about__subtitle">1</span>
        </div>

        <div className="about__box">            
            <i className="uil uil-graduation-cap about__icon"></i>
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">B.Tech</span>
        </div>
    </div>
  )
}

export default Info