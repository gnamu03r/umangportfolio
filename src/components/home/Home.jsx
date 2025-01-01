import React from 'react'

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a href="https://facebook.com" className="home__social-icon" target="_blank"><i className="uil uil-facebook-f"></i></a>
            <a href="https://github.com" className="home__social-icon" target="_blank"><i className="uil uil-github-alt"></i></a>
            <a href="https://instagram.com" className="home__social-icon" target="_blank"><i className="uil uil-instagram"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home