import React from "react";
// import transition from "../transition";
import {motion} from "framer-motion";

const About = () => {
    return (
        <motion.div 
        className="container text-center  bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
                // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
        <div className="page">
            About
        </div>
        </motion.div>
    )
}

export default About;