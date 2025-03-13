import React from 'react'
import './services.css'

const Services = () => {
    const [ToggleState, setToggleState] = React.useState(false);

    const ToggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>

        <div className='services__container container grid'>
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Front-end <br /> developer</h3>
                </div>
                <span className="services__button" onClick={() => ToggleTab(1)}>View more <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={ToggleState === 1 ? "services__modal active-modal" : "services__modal"}>               
                    <div className="services__modal-content">
                        <i onClick={() => ToggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">Web development</h3>
                        <p className="services__modal-description">I develop web pages using HTML, CSS and JavaScript.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I develop the user interface.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Web page development.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I create UX element interactions.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">I position your company brand.</p>
                            </li>
                        </ul>
                    </div>
                </div>  
            </div>            
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">SDE <br /> Intern</h3>
                </div>
                <span className="services__button" onClick={() => ToggleTab(2)}>View more <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={ToggleState === 2 ? "services__modal active-modal" : "services__modal"}>               
                    <div className="services__modal-content">
                        <i onClick={() => ToggleTab(0)} className="uil uil-times services__modal-close"></i>
                        <h3 className="services__modal-title">SDE Intern</h3>
                    <p className="services__modal-description">I have proficient knowledge of data structures and algorithms.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Can learn and implement new technologies.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Ability to work in a dynamic environment.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Have good communication skills.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Have good problem-solving skills.</p>
                            </li>
                        </ul>
                    </div>  
                </div>  
            </div>
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Founder's Office<br /> Intern</h3>
                </div>
                <span className="services__button" onClick={() => ToggleTab(3)}>View more <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={ToggleState === 3 ? "services__modal active-modal" : "services__modal"}>               
                    <div className="services__modal-content">
                        <i onClick={() => ToggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Founder's Office Intern</h3>
                        <p className="services__modal-description">I have good leadership skills and have experience in working at a startup.</p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Can manage a team of developers.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Can delegate tasks to team members.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Can handle complex problems.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Have good communication skills.</p>
                            </li>
                        </ul>                
                    </div>  
                </div>  
            </div>
        </div>

    </section>
  )
}

export default Services