import { Link, useParams, useLocation, createHashRouter } from "react-router-dom";
import { workData, categories } from '../data/workData';
import {motion} from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Project() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const navigate = useNavigate();

    // work carousel index to set to correct position when going
    const carouselIndex = location.state?.carouselIndex;

  const { slug } = useParams();

  const project = workData.find((item) => item.slug === slug);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (selectedImage === null) return;

    if (e.key === "ArrowRight") {
      setSelectedImage((current) =>
        current === project.images.length - 1 ? 0 : current + 1
      );
    }

    if (e.key === "ArrowLeft") {
      setSelectedImage((current) =>
        current === 0 ? project.images.length - 1 : current - 1
      );
    }

    if (e.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage, project.images.length]);

console.log(project.images);


  return (
    <motion.div 
        className="container text-center  bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
                // transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
        <div className="page" id="project-details">
            <div className="portfolio-grid">
                <Link onClick={() => navigate(-1)}>← Back</Link>
                <motion.img
                src={'../' + project.images[0]}
                layoutId={`project-image-${project.slug}`}
                onLoad={() => console.log("IMAGE LOADED")}
                onError={(e) => console.log("IMAGE ERROR", e)}
                className="main-image"
                />
                <div className="project-description">
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
                <div className="gallery">
                    {project.images.length > 1 && (
                    <div className="images">
                    {project.images.map((image, index) =>
                        index > 0 ? (
                            <img
                            key={index}
                            src={'../' + image}
                            alt={project.slug}
                            onClick={() => setSelectedImage(index)}
                            />
                        ) : null
                        )}
                    
                    </div>
                    )}
                    {project.videos.length > 0 && (
                    <div className="videos">
                        {project.videos.map((video, index) =>
                        (
                            <video
                            key={index}
                            src={'../' + video}
                            alt={project.slug}
                            onLoad={() => console.log("video LOADED")}
                onError={(e) => console.log("video ERROR", e)}
                            autoPlay
                            muted
                            loop
                            playsInline
                            webkit-playsinline="true"
                            />
                        )
                        )}
                    </div>
                    )}
                </div>
                {selectedImage !== null && (
                <div
                    className="lightbox"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                    className="lightbox-close"
                    onClick={() => setSelectedImage(null)}
                    >
                    ×
                    </button>

                    <button
                    className="lightbox-prev"
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(
                        selectedImage === 0
                            ? project.images.length - 1
                            : selectedImage - 1
                        );
                    }}
                    >
                    ←
                    </button>

                    <img
                    src={'../' + project.images[selectedImage]}
                    alt=""
                    onClick={(e) => e.stopPropagation()}
                    />

                    <button
                    className="lightbox-next"
                    onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(
                        selectedImage === project.images.length - 1
                            ? 0
                            : selectedImage + 1
                        );
                    }}
                    >
                    →
                    </button>
                </div>
                )}
            </div>
        </div>
    </motion.div>
  );
}

export default Project;