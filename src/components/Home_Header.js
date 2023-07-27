import React from 'react'
import './Home.css'
export const Home_Header = () => {
    return (
        <>
            <div id='hero'>
            <div className='overlay'></div>
                <h4>Red Bull GYM</h4>
                <h1>“BE STRONG <br/><span>TRAIN HARD</span><br/> WITH US”</h1>
                <h5>Location: @Erode</h5>
                <button className='white' href='#'>Explore</button>
            </div>
        </>
    )
}