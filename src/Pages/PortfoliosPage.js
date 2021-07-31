import React from 'react';
import Title from '../Components/Title';

import img1 from '../img/portImages/port1.jpg';
import img2 from '../img/portImages/port2.jpg';
import img3 from '../img/portImages/port3.jpg';
import img4 from '../img/portImages/port4.jpg';
import img5 from '../img/portImages/port5.jpg';
import img6 from '../img/portImages/port6.jpg';


function PortfoliosPage() {
    
    
    
    return (
        
        <div className="PortfoliosPage">
            <div className="title">
           <Title title={'Portfolios'} span={'Portsolios'}/>
            </div>
            <div className="portfolios">
               
                <div className="container">
                    <div className="item">
                        <img src={img1}
                        alt="" />
                        <h3>Baning App</h3>

                    </div>
                    <div className="item">
                        <img src={img2}
                        alt="" />
                        <h3>Baning App</h3>

                    </div>
                    <div className="item">
                        <img src={img3}
                        alt="" />
                        <h3>Baning App</h3>

                    </div>
                    <div className="item">
                        <img src={img4}
                        alt="" />
                        <h3>Baning App</h3>

                    </div>
                    <div className="item">
                        <img src={img5}
                        alt="" />
                        <h3>Baning App</h3>

                    </div>
                    <div className="item">
                        <img src={img6}
                        alt="" />
                        <h3>Baning App</h3>

                    </div>


                </div>
                

            </div>
        </div>
    )
}

export default PortfoliosPage
