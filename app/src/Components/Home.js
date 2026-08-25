import React from "react";
// import transition from "../transition";
import {motion} from "framer-motion";
import foto from '../assets/DSCF5409.jpg';

const Home = () => {
    return (
        <motion.div 
        className="container text-center  bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        >
            <div className="page">
                <div className="portfolio-grid">
                    <div className="portfolio-card">
                        <div className="main-content">
                            <div className="main-image">
                                <img
                                    src={"images/DSCF9121.jpg"}
                                    alt="Aline"
                                    className="main-image"
                                />
                            </div>
                            <div className="portfolio-content">                              
                                {/* <p className="subtitle"><b>Senior UX Designer & Creative Technologist</b> with 7+ years of experience designing digital products, systems thinking and frontend implementation.</p> 
                                <p>Skilled in translating complex user, business and technical challenges into purposeful products. Experienced in working across design, strategy and engineering teams. Motivated by human-centered innovation. </p>
                        <p><a href="mailto:aline.swinkels@hotmail.com">aline.swinkels@hotmail.com</a> | <i>Eindhoven</i> | +31622462567</p> */}

                        <p className="subtitle"><b>An analytic systems thinker and creative technologist driven to understand complexity, connect ideas and create meaningful change.</b></p>        
                                <p>I'm endlessly curious about how things work—and why they don't. Whether designing digital experiences or exploring larger societal challenges, I'm motivated by understanding systems, questioning assumptions and creating solutions that have a lasting, positive impact.</p>
                                {/* <p>With a background in UX design, technology and innovation, I thrive at the intersection of design, engineering and strategy — helping teams understand complex systems and create solutions that are more thoughtful, sustainable and impactful.
                                Driven by curiosity and a deep sense of responsibility towards people, society and the planet, I explore how technology can contribute to a more balanced future.</p> */}
                                <p><a href="mailto:aline.swinkels@hotmail.com">aline.swinkels@hotmail.com</a> | <i>Eindhoven</i></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="image-wrapper">
                    <img
                        src={"images/DSCF9121.jpg"}
                        alt="Aline"
                        className="main-image"
                    />
                    <div className="introduction-paragraph">
                        <p><b>Senior UX Designer & Creative Technologist</b> with 7+ years of experience designing digital products, systems thinking and frontend implementation. Skilled in translating complex user, business and technical challenges into purposeful products. Experienced in working across design, strategy and engineering teams. Motivated by human-centered innovation. </p>
                        <p><a href="mailto:aline.swinkels@hotmail.com">aline.swinkels@hotmail.com</a> | <i>Eindhoven</i> | +31622462567</p>
                    </div>
                </div> */}
                <div className="clients portfolio-grid">
                    <span>clients I've worked with</span>
                    <div className="image-container portfolio-card">
                        <div className="gallery">
                            <img
                            src={"images/clients/jde.svg.png"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/bosch.png"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/bayer.svg"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/philips.png"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/RB.png"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/tf.webp"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/vpro.png"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/atag.png"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/britax.png"}
                            alt="paaspop"
                            className="client-images"
                            />
                            <img
                            src={"images/clients/paaspop.png"}
                            alt="paaspop"
                            className="client-images"
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="name last-name">
                    <h1>Swinkels</h1>
                </div> */}
            </div>
        </motion.div>
    )
}

export default Home;