import { useParams } from "react-router-dom";
import useProject from "../../hooks/use-project";
import CreatePledge from "../components/PledgeForm/pledgeForm";
import { useNavigate } from 'react-router-dom'



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

    const handleDeleteSubmit = (ev) => {
       alert("You will delete your project")
       ev.preventDefault();
       navigate("/");
    }

    return (
        <div>
            <h2>{project.title}</h2>
            <h3>Created at: {project.date_created.split("T")[0]}</h3>
            <h3>{`Status: ${project.is_open}`}</h3>
            <h3>Description: {project.description}</h3>

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

<CreatePledge projectId={id}/>
<button  onClick={handleEditSubmit}>Edit</button>
<button onClick={handleDeleteSubmit} >Delete</button>

</div>
    );
}

export default ProjectPage;