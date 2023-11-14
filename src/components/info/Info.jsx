import React from 'react'
import './info.css'


function Info() {

    const { apiData } = useData();

    return (
        <div className='info-container'>

            <div>{apiData}</div>

            <div className='info-first-text'>
                <p className='first-title-info'>Advanced Statistics</p>
                <p className='info-description'>Track how your links are performing across the web with pur advanced statistics dashboard.</p>
            </div>
            <div className='boxes-container'>
                <div className='text-box first'>
                    <div className='circle-icon one'></div>
                    <p className='info-title'>Brand Recognition</p>
                    <p className='info-description'>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className='blue-line'></div>
                <div className='text-box second'>
                    <div className='circle-icon two'></div>
                    <p className='info-title'>Detailed Records</p>
                    <p className='info-description'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <div className='blue-line'></div>
                <div className='text-box third'>
                    <div className='circle-icon three'></div>
                    <p className='info-title'>Fully Customizable</p>
                    <p className='info-description'>Improve brand awarness and content discoverability throgh customizable links, supercharging audience engagement.</p>
                </div>
            </div>
            <div className='action-caller-container'>
                <p className='action-caller-text'>Boost your links today</p>
                <div className='action-caller-button'>
                    <p className='button-text'>Get Started</p>
                </div>
            </div>
        </div>
    )
}

export default Info