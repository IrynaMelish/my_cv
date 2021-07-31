import React from 'react'
import about from '../img/about.jpg'



function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span>Lorem</span></h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dignissimos ab nulla nemo, fugiat nihil unde quasi pariatur dicta repellendus atque. Laboriosam illo, dolores quaerat amet ea temporibus exercitationem id.</p>


            </div>
            

            
        </div>
    )
}

export default ImageSection



