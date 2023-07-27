import React from 'react'
import fb from "../assets/icons/Footerimages/facebook.png";
import twitter from "../assets/icons/Footerimages/twitter.png";
import insta from "../assets/icons/Footerimages/insta.png";
import youtube from "../assets/icons/Footerimages/youtube.png";
import img from '../assets/images/Gym/bull_login.png'
import "./footer.css";
const Footer=()=> {
  return (
    <div id='#footer' className='footer'>
        <div className='sb__footer section__padding'>
            <div className='sb__footer-links'>
                <div className='sb__footer-links_div'>
                    <img src={img}/>
                    <h4>Quick Links</h4>
                    <a href="#"><p>Home</p></a>
                    <a href="#"><p>Exercise</p></a>
                    <a href="#"><p>About us</p></a>
                    <a href="#"><p>BMI Calculator</p></a>
                    <a href="#"><p>Subscriptions</p></a>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Gym Contact</h4>
                    <p>Mr. Vinoth - Owner Redbul Gym</p>
                    <h4>Email</h4> <p>Vinoth@gmail.com</p>
                    <p>Phone +91 12345678</p>
                    <h4>Address</h4>
                    <p> Ravi Theatre backside, 
                        Erode Trust Hospital Backside, 
                        Chinnamuthu 2nd Street, 
                        Edayankattuvalasu, 
                        Erode,Tamil Nadu 638011
                    </p>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Gym Features</h4>
                    <p>Variety of Training</p>
                    <p>High-Quality Exercise Equipment</p>
                    <p>Well-Designed Space and Facility</p>
                    <p>Personal Training Services</p>
                    <p>Cleanliness and Maintenance</p>
                    <p>Interactive Fitness</p>
                    <p>Member Amenities and Privileges</p>
                </div>
                <div className='sb__footer-links_div'>
                    <h4>Social Media Links</h4>
                    <div className='socialmedia'>
                        <p><img src={fb} alt="Facebook"/></p>
                        <p><img src={twitter} alt="Twitter"/></p>
                        <p><img src={insta} alt="Instagram"/></p>
                        <p><img src={youtube} alt="Youtube"/></p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb__footer-below'>
                <div className='sb__footer-copyright'>
                    <p> RedBull Gym All rights reserved.</p>
                </div>
                <div className='sb__footer-below-links'>
                    <a href="#"><p>Terms & Conditions</p></a>
                    <p>Copyrights@2023 RedBull Gym</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;
