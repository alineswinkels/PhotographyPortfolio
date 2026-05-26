import React from "react";
// import transition from "../transition";
import {motion} from "framer-motion";
import { workData, categories } from '../data/workData';

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
            
       
            <motion.div 
            className="portfolio-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
                    // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
                
                {workData.map((item) => (
                    
                    <div className="portfolio-card" key={item.slug}>
                    <div className="gallery">
                        {item.images.map((image, index) => (
                            <img key={index} src={image} alt={item.slug} />
                        ))}
                        </div>

                    <div className="portfolio-content">
                        <h2>{item.title}</h2>
                            {item.categories.map((categoryId) => {
                            const category = categories.find(
                                (cat) => cat.id === categoryId
                            );

                            return (
                                <span key={categoryId}>
                                {category.name}
                                </span>
                            );
                            })}
                        
                        <p>{item.description}</p>
                    </div>
                    </div>
                ))}
            </motion.div>
        </div>
        </motion.div>
    )
}

export default Work;