import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import postPledge from '../../../api/post-pledge';
import Button from '../Buttton/Button';

function CreatePledge(props) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [pledgeData, setPledgeData] = useState({
    project: props.projectId,
    amount: '',
    comment: '',

  })

  const handleChange = (e) => {
    setPledgeData({
      ...pledgeData, 
      [e.target.id]: e.target.value
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    postPledge(pledgeData)
      .then(() => {
        navigate(0);
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2>Create a Pledge</h2>
        <label htmlFor="amount">Donation to Support our Projects:</label>
        <input 
          type="text" 
          id="amount" 
          placeholder='Enter amount' 
          onChange={handleChange} 
        />
      </div>
      <div>
        <label htmlFor="comment">Comment</label>
        <input 
          type="text" 
          id="comment" 
          placeholder='Enter a comment' 
          onChange={handleChange} 
        />
      </div>

      {/* <input type="submit" value=" Create Pledge" /> */}
      <Button  text={"Create Pledge"} btnClass = "btn-info "  onClick={handleSubmit} />
    </form>
  )
}

export default CreatePledge