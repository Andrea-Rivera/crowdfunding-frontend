import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";
import "./HomePage.css"
import getProjects from "../../api/get-projects";

const HomePage = () =>{
    const projects = getProjects()
    return(

       <div id = "project-list">
        {allProjects.map((projectData, key)=>{
            return <ProjectCard key={key} projectData = {projectData} />
        })}
       </div>
    )
}

export default HomePage