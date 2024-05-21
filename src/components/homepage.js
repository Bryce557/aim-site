import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/animation';
import { TypeAnimation } from 'react-type-animation';
import '../style/homepage.css'
import '../style/colors.css'
import '../style/fonts.css'
import { BackgroundBeams } from './ui/background-beams.tsx';


class HomePage extends Component {

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
            }
        };

            return (
                        <div>
                            <div className="welcome">
                                <h1 className="acm-heavier size-xl">
                                    Welcome to the largest <br />
                                    <TypeAnimation 
                                        sequence={["Computer Science"]}  
                                        speed={5} 
                                        cursor={false}
                                        className="acm-multi-color"
                                    />
                                    <br /> community at CU Denver <br />
                                </h1> 
                            </div>
                        </div>
            );
        }
}

export default HomePage;

/*

                            <div className="lottie-container">
                                <Lottie
                                    className="lottie"
                                    options={defaultOptions}
                                    width={"80%"}
                                />
                            </div>

                            <div className="terminalDiv">
                                <body style={{"background-color": "black"}}>
                                    <TypeAnimation sequence = {
                                        [`>> Welcome to our website! We are dedicated to providing exceptional services/products
                                             that cater to your needs. With years of experience in the industry, our team is committed 
                                             to delivering top-notch solutions tailored to your requirements. Explore our website to learn 
                                             more about our offerings and how we can assist you in achieving your goals. We strive for 
                                             excellence in everything we do, ensuring customer satisfaction and building long-lasting relationships. 
                                             Get in touch with us today to embark on a journey towards success.`]} speed={75} className="terminal"/>
                                </body>
                            </div>


*/
