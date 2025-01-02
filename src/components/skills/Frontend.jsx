import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend developer</h3>
        <div className="skills__box"> 
            <div className="skills__group"> 
                <div className="skills__data"> 
                    <i className="uil uil-web-grid skills__icon"></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                <div className="skills__data"> 
                    <i className="uil uil-ruby skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Ruby on Rails</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data"> 
                    <i className="uil uil-ruby skills__icon"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data"> 
                    <i className="uil uil-ruby skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Vue</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data"> 
                    <i className="uil uil-ruby skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Angular</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Frontend