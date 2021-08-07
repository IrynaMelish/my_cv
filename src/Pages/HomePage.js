import React from 'react';

import {FaFacebookSquare} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

function HomePage() {
    return (
        <div className="HomePage">
            

             <header className="intro">
                 <h1>Hi, I am <span>Iryna Melish</span></h1>
                 <p>FrontEnd Web Developer</p>
                 <div className="icons">
                 <a href="https://www.facebook.com/people/%D0%86%D1%80%D0%B0-%D0%9C%D0%B5%D0%BB%D1%96%D1%88/100006181216003/" className=" icon i-facebook">
                     <FaFacebookSquare/>
                 </a>
                 <a href="https://github.com/IrynaMelish"  className="icon i-github">
                 <FaGithub/>
                 </a>
                 <a href="https://www.linkedin.com/in/%D1%96%D1%80%D0%B0-%D0%BC%D0%B5%D0%BB%D1%96%D1%88-9a10ba13a" className="icon i-linkedin">
                < FaLinkedin />
                 </a>
                 </div>

               
            </header> 
        </div>


    )
}

export default HomePage

