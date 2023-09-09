import useProjects from "../../hooks/use-projects";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./HomePage.css"

const HomePage = () =>{
    const { projects } = useProjects();
    return(

       <div id = "project-list">
        {projects.map((projectData, key) => {
            return <ProjectCard key={key} projectData = {projectData} />
        })}
       </div>
    )
}

export default HomePage