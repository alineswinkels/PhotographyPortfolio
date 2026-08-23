import React from "react";
// import transition from "../transition";
import {motion} from "framer-motion";
import foto from '../assets/DSCF5409.jpg';

const About = () => {
    return (
        <motion.div 
        className="container text-center  bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        >
            <div className="page">
                

                {/* <h3>My Toolbox</h3>
                <div className="portfolio-grid">
                    <div className="toolbox">
                        <div className="tool-category">
                            <div className="tool-item">UX Strategy</div>
                            <div className="tool-item">Research</div>
                            <div className="tool-item">System Thinking</div>
                        </div>
                        <div className="tool-category">
                            <div className="tool-item">Figma</div>
                            <div className="tool-item">Adobe</div>
                            <div className="tool-item">Sketch</div>
                        </div>
                        <div className="tool-category">
                            <div className="tool-item">HTML</div>
                            <div className="tool-item">React</div>
                            <div className="tool-item">Arduino</div>
                        </div>
                    </div>
                </div> */}
                <div className="portfolio-grid">
                    <h3>About me</h3>
                    <p>Outside of work, you'll usually find me exploring outdoors somewhere. I love diving, snowboarding, playing sports, traveling and exploring new places—usually with a camera in my backpack.<br/><br/></p>
                    <p>I love learning new things and being creative—whether that's making music, crafting, building something, or occasionally convincing a friend to let me tattoo them.<br/><br/></p>
                    <p>The ocean is my favorite place, and I care deeply about the natural world. I enjoy working with people just as much as I enjoy being out in nature, and I believe the best experiences—and the best ideas—come from feeling connected: to each other, to animals, and to the world around us.</p>
                </div>

                <div className="portfolio-grid photos">
                    <div className="portfolio-card">
                        <div className="gallery">
                            <img
                                src={"images/about/dji_export_20260204_photo_0045.JPG"}
                            />
                            <img
                                src={"images/about/3F027ED3-949B-4328-9DC0-785B50FCB731-18371-0000028F8A0E9201.JPG"}
                            />
                            <img
                                src={"images/about/IMG_0016.heic"}
                            />
                        </div>
                    </div>
                </div>

                <h3 id="experience">Experience</h3>
                <div className="portfolio-grid">
                    <p>With over seven years of experience spanning UX design, frontend development and innovation, I've worked across multidisciplinary teams to bring concepts to life. But what motivates me most is understanding how things work and how they can become more thoughtful, sustainable and impactful.</p>
                </div>
                <div className="timeline">
                    <div className="job-container">
                        <div className="job">
                        <div className="job-content">
                            
                            <h4><b>Fullstack Developer</b> @ <a href="https://www.freshheads.com/en/" target="_blank">Freshheads</a></h4>
                            {/* <p>Focused on Frontend development for client projects within a multidisciplinary internship team.<br />
                                UX design and backend implementation for digital products and platforms.
                            </p> */}
                                <ul>
                                    <li>Frontend development</li>
                                    <li>Backend development</li>
                                    <li>UX Design</li>
                                </ul>
                            
                        </div>
                        </div>
                        <div className="job">
                            <div className="job-content">
                                <h4><b>Research & Prototyping</b> @ <a href="https://www.wpp.com/en/news/2015/06/groupm-acquires-greenhouse-group-bv-in-the-netherlands" target="_blank">Greenhouse Group Labs</a></h4>
                                {/* <p> User research for mixed reality as a communication tool for workplace collaboration.<br />
        Development of a functional mixed reality prototype using Microsoft’s HoloLens.</p> */}
                                    <ul>
                                        <li>Technical and user research</li>
                                        <li>Prototyping (Unity, mixed reality)</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="job">
                            <div className="job-content">
                                <h4><b>Creative Developer & UX Designer</b> @ <a href="https://newsroom.accenture.com/news/2020/accenture-acquires-dutch-product-design-and-innovation-agency-vanberlo-to-help-clients-build-smart-connected-solutions" target="_blank">VanBerlo</a></h4>
                                <span>later acquired by Accenture</span>
                                {/* <p>Designed and implemented digital products and services at the intersection of innovation,
        UX , technology and business needs.<br />
        Translated complex pro j ect and operational data into intuitive dashboards and visuali zations
        for multidisciplinary teams.<br />
        C ollaborated closely with softw are engineers to translate user needs and business
        requirements into technical solutions and frontend experiences.</p> */}
                                    <ul>
                                        <li>UX Design</li>
                                        <li>Research</li>
                                        <li>Concepting</li>
                                        <li>Prototyping (software and hardware)</li>
                                        <li>Frontend development, React</li>
                                        <li>Consultancy</li>
                                        <li>Photography & Video</li>
                                    </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="job">
                        <h4>Accenture</h4>
                        <p>fontend / backend developer ux</p>
                    </div> */}
                    <div className="line"></div>
                    
                </div>
                
            </div>
        </motion.div>
    )
}

export default About;