import React from 'react'
import './Home.css'

const Home_Card_txt = ({txt}) => {
    return (
        <>
            <div id='card-container-cost'>
                {txt.map((item)=> 
                <div className='card'>
                    <div className='des'>
                        <h2>{item.title}</h2>
                        <h4>{item.txt}</h4>
                        <br/><br/>
                        <div className='list'>
                            <li>Full Body</li>
                            <li>Weight Loss</li>
                            <li>Muscle Building</li>
                            <li>Ab Workouts</li>
                        </div>
                    </div>
                </div>
                )}
            </div>
    </>
    )
}

export default Home_Card_txt