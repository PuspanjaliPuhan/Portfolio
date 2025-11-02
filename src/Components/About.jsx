import React from 'react'
import './About.css'

// import theme_pattern from ''
import logo_img from '../assets/logo.svg'
import profile_img from '../assets/lusi.png'

export default function About() {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={logo_img} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet doloribus fugiat nostrum iusto aliquid, aperiam ipsum mollitia eum voluptatem quis eligendi ea iste magnam laborum incidunt.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dicta voluptas cum quas magni dolore, cumque a enim laboriosam magnam?</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{ width: "85%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>Full-Stack Web Development</h1>
                    <p>Kodnest,  June 2025 – Present</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Python & AI/ML Summer Camp</h1>
                    <p>With One project, 2023</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>Forever Buy</h1>
                    <p>MERN STACK Collage Project, 2025</p>
                </div>
            </div>
            <div className="about-workShop">
                <div className="about-achievement">
                    <h1>Generative AI Workshop</h1>
                    <p> NxtWave 2023</p>
                </div>
                <div className="about-achievement">
                    <h1>Career Summit Seminar</h1>
                    <p> Wooble 2024</p>
                </div>
            </div>
        </div>
    )
}
