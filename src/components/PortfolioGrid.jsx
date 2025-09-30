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
    { id: 1, imgSrc: '/public/tom and jerry.jpeg' },
    { id: 2, imgSrc: '/public/shiva.jpeg' },
    { id: 3, imgSrc: '/public/vikram.jpeg' },
    { id: 4, imgSrc: '/public/sapna.jpeg' },
    { id: 5, imgSrc: 'public/anime.jpeg' },
    { id: 6, imgSrc: 'public/glass.jpeg' },
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