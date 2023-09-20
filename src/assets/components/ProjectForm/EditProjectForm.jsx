import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import editProject from '../../../api/put-project';

function EditProject(){
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
        navigate(0)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    // <div>hello</div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input 
          type="text" 
          id="title" 
          placeholder='Enter title' 
          defaultValue={projectData.title}
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

      <input type="submit" value="Edit Project" />
    </form>
  )




}
export default EditProject 


