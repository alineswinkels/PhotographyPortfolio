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
        transition={{ duration: 1 }}
        >
        <div className="page">
            <h1>About</h1>
            <div className="image-wrapper">
                <img
                    src={foto}
                    alt="Aline"
                    className="main-image"
                />
                <p>Een analytische, mensgerichte maker die moeiteloos schakelt 
                    tussen idee en uitvoering. Als generalist verbind ik 
                    gebruikersinzichten, creatief denken en technische haalbaarheid 
                    tot slimme, werkende oplossingen.</p>
            </div>
        </div>
        </motion.div>
    )
}

export default Home;