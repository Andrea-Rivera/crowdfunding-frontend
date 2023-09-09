import{ Link }from"react-router-dom";
import "./ProjectCard.css";

const ProjectCard = (props) => {
const {projectData} = props;
const projectLink = `project/${projectData.id}`;
return(
    <div className="project-card">
        <Link to={projectLink}>
            <h3>{projectData.title}</h3>
            <img src={projectData.image}/>
             <p>{projectData.description}</p>
          
        </Link>
    </div>
)
}

export default ProjectCard;