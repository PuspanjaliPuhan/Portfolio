import React from 'react'
import './About.css'

// import theme_pattern from ''
import logo_img from '../assets/logo.svg'
import profile_img from '../assets/lusi.jpeg'
import Py_ml from '../assets/Python-ML.pdf'
import next_wave from '../assets/NXT-wave.pdf'
import tech_gurukul from '../assets/Tech-gurukul.pdf'
export default function About() {
    return (
        <div id='about' className='about'>
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
                        <p>A motivated and results-driven final-year B.Tech. Interested in Python and seeking a challenging position in a reputed
                            organization where I can leverage my technical skills, innovative mindset, and academic knowledge to contribute to the
                            company’s growth while gaining valuable experience. I consider these attributes crucial in any work environment and am
                            excited to put them into practice in real world scenarios.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "65%" }} /></div>
                        <div className="about-skill"><p>BootStrap</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>SQL</p><hr style={{ width: "85%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>

            <div className='certificate'> Certifications & WorkShop </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <a href="">
                        <h1>Full-Stack Web Development</h1>
                        <p>Kodnest,  June 2025 – Present</p>
                    </a>
                </div>
                <hr />
                <div className="about-achievement">
                    <a href={Py_ml} target='_blanck'>
                        <h1>Python & AI/ML Summer Camp</h1>
                        <p>With One project, 2023</p>
                    </a>
                </div>
                {/* <hr />
                <div className="about-achievement">
                    <h1>Forever Buy</h1>
                    <p>MERN STACK Collage Project, 2025</p>
                </div> */}
            </div>
            <div className="about-workShop">
                <div className="about-achievement">
                    <a href={next_wave} target='_blank'>
                        <h1>Generative AI Workshop</h1>
                        <p> NxtWave 2023</p>
                    </a>
                </div>
                <div className="about-achievement">
                    <a href="">
                        <h1>Career Summit Seminar</h1>
                        <p> Wooble 2024</p>
                    </a>
                </div>
                <div className="about-achievement">
                    <a href={tech_gurukul} target='_blank'>
                        <h1>Tech Gurukul Workshop</h1>
                        <p> Tech Gurukul 2024</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
