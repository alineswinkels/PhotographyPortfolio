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
                    <p>Ik ben een generalist met een sterke interesse in mensen. Wat drijft ze? Waar lopen ze vast? En hoe kunnen we dat beter maken? Mijn kracht zit in het scherp krijgen van het echte probleem, het verbinden van perspectieven en het bedenken van ideeën die niet alleen creatief zijn, maar ook haalbaar.
                                Ik werk graag samen, dicht op het proces, in een team waar ruimte is om te sparren, te testen en te bouwen. Op zoek naar iemand die meedenkt, doorvraagt en dingen werkend maakt? </p>
            </div>
        </div>
        </motion.div>
    )
}

export default Home;