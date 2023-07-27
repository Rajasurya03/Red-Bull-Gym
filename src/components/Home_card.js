import React from 'react'
import './Home.css'

const Home_card = ({list}) => {
    return (
        <>
            <div id='card-container'>
                {list.map((item)=> 
                <div className='card'>
                    <img src={item.image} alt='pic'/>
                    <div className='des'>
                        <h4>{item.title}</h4>
                    </div>
                </div>
                )}
            </div>
        </>
    )
}

export default Home_card