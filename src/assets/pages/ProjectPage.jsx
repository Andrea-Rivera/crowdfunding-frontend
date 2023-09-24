import { useParams } from "react-router-dom";
import useProject from "../../hooks/use-project";
import CreatePledge from "../components/PledgeForm/CreatePledgeForm";
import deleteProject from "../../api/delete-project";
import { useNavigate } from 'react-router-dom'
import Button from "../components/Buttton/Button";
import "./ProjectPage.css"



function ProjectPage() {
    const { id } = useParams();
    const navigate = useNavigate()
    const { project, isLoading, error } = useProject(id);

    console.log(isLoading)
    
    if (isLoading) {
        return (<p>loading...</p>)
    }

    if (error) {
        return (<p>{error.message}</p>)
    }

    const handleEditSubmit = () => {
        navigate(`/projectsEdit/${id}`);
     }

    const handleDeleteSubmit = () => {
 
        deleteProject(project)
        .then(() => {
          navigate(`/project/${project.id}`);
        })
        .catch(() => {
            navigate(`/`);
        })
    }
      
    

    return (
        <div>
            <section className="projectList">
            <h2>{project.title}</h2>
            <Button text={"Edit Project"} btnClass = "btn-info "  onClick={handleEditSubmit}/>
            <Button text={"Delete Project"} btnClass = "btn-info "  onClick={handleDeleteSubmit}/>
            <h3>Created at: {project.date_created.split("T")[0]}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Description: {project.description}</h3>
            
            </section>
            <section className="plegeList">
            <h3>Pledges:</h3>
            <ul>
                {project.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                          Amount:  {pledgeData.amount} 
                            {/* from {pledgeData.supporter} */}
                        </li>
                    );
                })}
            </ul>
            </section>


<section className="createPledge">

<CreatePledge projectId={id}/>
</section>



</div>
    );
}

export default ProjectPage;