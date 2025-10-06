import React from 'react';
import '../index.css';

const PortfolioItem = ({ title, description, imgSrc }) => (
  <div className="portfolio-item">
    <img src={imgSrc} alt={title} />
    <div className="overlay">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const PortfolioGrid = () => {
  // --- CUSTOMIZE THIS ARRAY WITH YOUR OWN PROJECTS ---
    const projects = [
      { id: 1, imgSrc: 'https://res.cloudinary.com/dnnowub0q/image/upload/v1759744334/sapna_ibe0gr.jpg' },
      { id: 2, imgSrc: 'https://res.cloudinary.com/dnnowub0q/image/upload/v1759744334/shiva_zphokx.jpg' },
      { id: 3, imgSrc: 'https://res.cloudinary.com/dnnowub0q/image/upload/v1759744335/glass_rq0o6j.jpg' },
      { id: 4, imgSrc: 'https://res.cloudinary.com/dnnowub0q/image/upload/v1759744335/tom_and_jerry_nc6wbj.jpg' },
      { id: 5, imgSrc: 'https://res.cloudinary.com/dnnowub0q/image/upload/v1759744336/anime_mwwdtr.jpg' },
    ];
  // ----------------------------------------------------

  return (
    <section id="portfolio">
      <h2>My Featured Works</h2>
      <div className="portfolio-grid">
        {projects.map(project => (
          <PortfolioItem 
            key={project.id}
            // title={project.title}
            // description={project.description}
            imgSrc={project.imgSrc} 
          />
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;