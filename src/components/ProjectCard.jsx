// import "../pages/portfolio.css";


// const ProjectCard = ({ image, title, category, link }) => {
//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
//       <div className="project-image">
//         <img src={image} alt={title} />
//         <div className="overlay">
//           <p>{category}</p>
//           <h3>{title}</h3>
//           <span>View Project →</span>
//         </div>
//       </div>
//     </a>
//   );
// };

// export default ProjectCard;



import "../pages/portfolio.css";

const ProjectCard = ({ image, title, category, link, desc, tech }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-image">
        <img src={image} alt={title} />

        <div className="overlay">
          <p className="category">{category}</p>
          <h3>{title}</h3>

          <p className="desc">{desc}</p>

          <div className="tech">
            {tech.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>

          <span className="view">View Project →</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;