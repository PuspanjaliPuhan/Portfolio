import React from 'react'

import './Projects.css'
import logo_img from '../assets/logo.svg'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow-right.svg'

const Projects = () => {
    return (
        <div className='mywork'>
            <div className="mywork-title">
                <h1>My Latest Work</h1>
                <img src={logo_img} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return (
                        <a href={work.w_link} key={index} target='_blanck'>
                            <img key={index} src={work.w_img} alt="" className='pic' />
                        </a>
                    )
                })}
                <div className="showmore-wrapper">
                    <div className="mywork-showmore">
                        <p>Show More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects