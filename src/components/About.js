import React from 'react'
import img from '../assets/images/Gym/strong.jpg'

export const About = () => {
    return (
        <div className='about'>
            <img src={img} alt="Image"/>
            <div className='txt'>
                <h2>About Us</h2>
                <p>We are focused to deliver the true fitness experience.<br/> Our clubs are equipped with the latest generation of gym machines, <br/>we follow the newest trends.</p>
                <br/>
                <h4>Our Philosophy</h4>
                <p>To take away the hassle and make your fitness journey happy and hurdle-free. <br/>We do this by giving you a truly inspiring exercise space,<br/> proven fitness tools and a highly dedicated team of people,<br/> so you can get the results you want, when you want them.<br/> No fads, no frivolity, just a wealth of experience and knowledge of what it<br/> takes to fall in love…and stay in love…with feeling fit.</p>
            </div>
        </div>
    )
}
