import React from 'react'
import './Hero.css'
import profile_img from '../assets/lusi.jpeg'
import pdf_file from '../assets/Puspanjali-Puhan.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll';
export default function Hero() {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Puspanjali Puhan</span>, frontend developer based in INDIA. </h1>
            <p>I am a frontend developer from Bangaluru. Fresher, Ready to start my Career</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>
                        Connect With Me
                    </AnchorLink></div>
                <div className="hero-resume"> <a href={pdf_file} target="_blank" rel='noopener noreferer'>My resume </a></div>
                {/* <button></button> */}
            </div>

        </div >
    )
}
