import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import postProject from '../../../api/post-project';
import Button from '../Buttton/Button';
import "./CreateProjectForm.css"

function CreateProject(){
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [projectData, setProjectData] = useState({

    title: '',
    description: '',
    goal: 0,
    image:'',
    is_open:false,
    date_created:'',
    owner: ''
  })

  const handleChange = (e) => {
    setProjectData({
      ...projectData, 
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    postProject(projectData)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
<div className="create-project">
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          placeholder='Enter title' 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          id="description" 
          placeholder='Enter a description' 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="goal">Goal</label>
        <input 
          type="text" 
          id="goal" 
          placeholder='Enter the goal of the project' 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor='image'>Image</label>
        <input
          type="text" 
          id='image'
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="date_created">Date Created</label>
        <input 
          type="date" 
          id="date_created" 
          placeholder='Enter date' 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="title">Owner</label>
        <input 
          type="text" 
          id="owner" 
          placeholder='Enter owner' 
          onChange={handleChange} 
        />
      </div>

      <Button text={"Create Project"} btnClass = "btn-info "  onClick={handleSubmit}/>
    </form>
    </div>
  )




}
export default CreateProject 


