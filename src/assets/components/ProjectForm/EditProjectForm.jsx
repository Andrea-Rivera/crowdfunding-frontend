import { useNavigate , useParams} from 'react-router-dom'
import putProject from '../../../api/put-project';
import useProject from "../../../hooks/use-project";

function EditProject(){
    const { id } = useParams();
    const navigate = useNavigate()
    const { project, isLoading, error, setProject } = useProject(id);


if (isLoading) {
    return (<p>loading...</p>)
}

if (error) {
    return (<p>{error.message}</p>)
}

// console.log(project.date_created)

  const handleChange = (e) => {
    setProject({
      ...project, 
      [e.target.id]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()


    putProject(project)
      .then(() => {
        navigate(`/project/${project.id}`);
      })
      .catch(() => {
 
      })
  }



  return (

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          placeholder='Enter title' 
          value = {project.title}
          onChange={handleChange} 
        
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          id="description" 
          placeholder='Enter a description' 
          value = {project.description}
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="goal">Goal</label>
        <input 
          type="text" 
          id="goal" 
          placeholder='Enter the goal of the project' 
          value = {project.goal}
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor='image'>Image</label>
        <input
          type="text" 
          id='image'
          value = {project.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date_created">Date Created</label>
        <input 
          type="date" 
          id="date_created" 
          placeholder='Enter date' 
          value = {project.date_created.split("T")[0]}
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="title">Owner</label>
        <input 
          type="text" 
          id="owner" 
          placeholder='Enter owner' 
          value = {project.owner}
          onChange={handleChange} 
        />
      </div>

      <input type="submit" value="Edit Project" />
    </form>
  )




}
export default EditProject 


