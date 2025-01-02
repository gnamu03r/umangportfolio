import React from 'react'

const Backend = () => {
  return (
    <section className="skills__content">
        <h3 className="skills__title">Backend developer</h3>
        <div className="skills__box"> 
            <div className="skills__group"> 
                <div className="skills__data"> 
                    <i className="uil uil-node-js skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Node.js</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data"> 
                    <i className="uil uil-react skills__icon"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data"> 
                    <i className="uil uil-aws skills__icon"></i>
                    <div>
                        <h3 className="skills__name">AWS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                <div className="skills__data"> 
                    <i className="uil uil-docker skills__icon"></i>
                    <div>
                        <h3 className="skills__name">Docker</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Backend