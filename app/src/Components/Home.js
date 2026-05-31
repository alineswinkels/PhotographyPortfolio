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
                <div className="name first-name">
                <h1>Aline</h1>
            </div>
                {/* <h1>About</h1> */}
                <div className="image-wrapper">
                    <img
                        src={"images/DSCF9121.jpg"}
                        alt="Aline"
                        className="main-image"
                    />
                    <div className="introduction-paragraph">
                        <p><b>Senior UX Designer & Creative Technologist</b> with 7+ years of experience designing digital products, systems thinking and frontend implementation. Skilled in translating complex user, business and technical challenges into purposeful products. Experienced in working across design, strategy and engineering teams. Motivated by human-centered innovation. </p>
                        <p>aline.swinkels@hotmail.com | <i>Eindhoven</i> | +31622462567</p>
                    </div>
                </div>
                <div className="name last-name">
                <h1>Swinkels</h1>
            </div>
            </div>
        </motion.div>
    )
}

export default Home;