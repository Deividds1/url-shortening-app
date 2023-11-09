import React from 'react'
import './footer.css'
import facebookIcon from '/images/icon-facebook.svg'
import twitterIcon from '/images/icon-twitter.svg'
import pinterestIcon from '/images/icon-pinterest.svg'
import instagramIcon from '/images/icon-instagram.svg'

function Footer() {
    return (

        <div className='footer'>
            <div className='title-box'>
                <p className='footer-title'>Shortly</p>
            </div>
            <div className='footer-links-container'>
                <div className='links-box'>
                    <p className='list-title'>Features</p>
                    <ul>
                        <li>Link Shortening</li>
                        <li>Branded Links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className='links-box'>
                    <p className='list-title'>Resources</p>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className='links-box'>
                    <p className='list-title'>Company</p>
                    <ul>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='social-media-container'>
                    <img src={facebookIcon} alt="" />
                    <img src={twitterIcon} alt="" />
                    <img src={pinterestIcon} alt="" />
                    <img src={instagramIcon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer