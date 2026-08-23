import React from "react";
// import transition from "../transition";
import {motion} from "framer-motion";
import { workData, categories } from '../data/workData';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Work = () => {
    const [isHovered, setIsHovered] = useState(false);

    // timer for slider
    const sliderRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.5
            }
        );

        if (sliderRef.current) {
            observer.observe(sliderRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // timer auto slide
    // useEffect(() => {
    // if (!isInView || isHovered) return;

    // const interval = setInterval(() => {
    //     setCurrent(prev => (prev + 1) % workData.length);
    // }, 6000);

    //     return () => clearInterval(interval);
    // }, [isInView, isHovered, workData.length]);

    // scrolling behaviour
    const [startX, setStartX] = useState(null);

    const handlePointerDown = (e) => {
        setStartX(e.clientX);
    };

    const handlePointerUp = (e) => {
        if (startX === null) return;

        const distance = e.clientX - startX;

        if (distance > 50) previous();
        if (distance < -50) next();

        setStartX(null);
    };

    // active slider item
    const [current, setCurrent] = useState(1);

    const next = () => {
    // setCurrent((current + 1) % workData.length);
        if (current === workData.length) {
        // van clone laatste naar echte eerste
        setCurrent(1);
        } else {
        setCurrent(current + 1);
        }
    }

    const previous = () => {
    // setCurrent((current - 1 + workData.length) % workData.length);
        if (current === 1) {
            // van clone eerste naar echte laatste
            setCurrent(workData.length);
        } else {
            console.log('alle andere');
            setCurrent(current - 1);
        }
    }
    

    const items = [
        workData[workData.length - 1],
        ...workData,
        workData[0],
    ];

    const handleClick = (index) => {
    if (index === 0) {
        setCurrent(workData.length);
        return;
    }

    if (index === items.length - 1) {
        setCurrent(1);
        return;
    }

    setCurrent(index);
    };

    const navigate = useNavigate();

    const routeChange = (slug) => {
        sessionStorage.setItem("carouselIndex", current);

        navigate(`/work/${slug}`, {
            state: {
            carouselIndex: current
            }
        });
    };

    // session storage
    useEffect(() => {
        const savedIndex = sessionStorage.getItem("carouselIndex");
        

        if (savedIndex !== null) {
            setCurrent(Number(savedIndex));
        }
        }, []);

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
            <h3>Work</h3>
            
       
            <motion.div 
            className="portfolio-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
                    // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
            >
                <div>
                    {/* <p>
                        Over the past years, I have worked as a Creative Technologist and UX
                        Designer, designing and implementing digital products and services
                        that help clients innovate within their organizations. 
                        <br />
                        <br />
                        My background spans <b>UX design</b>, <b>systems thinking</b>, <b>digital
                        transformation</b>, <b>frontend development</b>, <b>physical prototyping</b> and
                        close collaboration within multidisciplinary teams. This combination
                        has helped me bridge the gap between concept, implementation,
                        and data, translating complex systems into clear, usable interfaces.    
                    </p> */}
                    <p>
                        {/* I believe the world's biggest challenges can't be solved in isolation—they require us to understand the systems they're part of.  */}
                        I believe meaningful change starts with understanding how systems work—and why they sometimes don't.
                        I love to work at the intersection of design, technology and systems thinking. I enjoy uncovering hidden patterns, connecting perspectives and translating complexity into meaningful products, experiences and ideas.
                    </p>
                    {/* <p>a selection of projects I've worked on</p> */}
                </div>



                <div 
                    ref={sliderRef} 
                    className="slider" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                >
                    <div className="project-wrapper" id="projects">
                        <div
                            className="track"
                            style={{
                                transform: `translateX(calc(-${current * 50}% + 25%)`
                            }}
                        >
                        {items.map((item, index) => (
                            <div 
                                className="card" key={index}
                                // onClick={() => handleClick(index)}
                                onClick={current === index ? () => routeChange(item.slug) : () => handleClick(index)}
                            >
                                <div className={`card-content ${current === index ? 'active' : ''}`}>
                                    <div className="card-title"><h4>{item.title}</h4></div>
                                    {/* <p>{item.description}</p> */}
                                    
                                    <div className="card-image">
                                    {/* <div className={`card-image ${current === item.id ? 'active' : ''}`}> */}
                                        <motion.img src={item.images[0]} layoutId={`project-image-${item.slug}`}/>
                                    </div>


                                    <div className="card-categories">
                                    {item.categories.map((categoryId, index) => {
                                    const category = categories.find(
                                        (cat) => cat.id === categoryId
                                    );

                                    const categoryLength = item.categories.length;

                                    return (
                                        <span key={categoryId}>
                                        {category.name}{index + 1 === categoryLength ? '' : ', '}
                                        </span>
                                    );
                                    })}
                                    </div>
                                    {/* <div className="images">
                                    {item.images.map((image, index) =>
                                        index > 0 ? (
                                            <img
                                            key={index}
                                            src={image}
                                            alt={item.slug}
                                            />
                                        ) : null
                                        )}
                                    </div> */}
                                </div>                                
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="slider__nav">
                        <button
                        className="slider__button"
                        onClick={previous}
                        >
                        ← Previous
                        </button>

                        <span className="slider__counter">
                        {current} / {workData.length}
                        </span>

                        <button
                        className="slider__button"
                        onClick={next}
                        >
                        Next →
                        </button>
                    </div>
                </div>
                

                {/* {workData.map((item) => (
                    
                    <div className="portfolio-card" key={item.slug}>
                        <div className="main-content">
                            <div className="main-image">
                                <img src={item.images[0]} />
                            </div>
                            <div className="portfolio-content">
                                <h4>{item.title}</h4>
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
                                <div className="gallery">
                            {item.images.map((image, index) =>
                                index > 0 ? (
                                    <img
                                    key={index}
                                    src={image}
                                    alt={item.slug}
                                    />
                                ) : null
                                )}
                        </div>
                            </div>
                        </div>
                        
                    </div>
                ))} */}
            </motion.div>
        </div>
        </motion.div>
    )
}

export default Work;