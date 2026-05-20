import React from "react";
// import transition from "../transition";
import {motion} from "framer-motion";

const Work = () => {
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
            <h1>Work</h1>
            <p>Ik ben een generalist met een sterke interesse in mensen. Wat drijft ze? Waar lopen ze vast? En hoe kunnen we dat beter maken? Mijn kracht zit in het scherp krijgen van het echte probleem, het verbinden van perspectieven en het bedenken van ideeën die niet alleen creatief zijn, maar ook haalbaar.
Ik werk graag samen, dicht op het proces, in een team waar ruimte is om te sparren, te testen en te bouwen. Op zoek naar iemand die meedenkt, doorvraagt en dingen werkend maakt? </p>
        </div>
        </motion.div>
    )
}

export default Work;