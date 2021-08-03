import React from 'react'
import about from '../img/about.jpg'



function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>bio</h4>
                <p>My name is Iryna Melish. I'm from Ternopil, Ukraine.</p>

<p>My love of beautiful websites and curiosity made me discover and explore Web development which naturally, led to my great interest in web development.

 I finally fully commited to learning front-end dev. Day by day I've been getting to know HTML, CSS and JavaScript. Then came sass, git and some React. Now, I'm devoted to building quality and beautiful websites.</p>

<p>I created this website to present my current skills , which could possibly help me find my first job as a junior front-end developer.</p>

            </div>
            

            
        </div>
    )
}

export default ImageSection



