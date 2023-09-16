import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import postPledge from '../../../api/post-pledge';

function CreatePledge(props) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [pledgeData, setPledgeData] = useState({
    project: props.projectId,
    amount: 0,
    comment: '',
    supporter: 0
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Amount</label>
        <input 
          type="text" 
          id="amount" 
          placeholder='Enter the amount' 
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
      <div>
        <label htmlFor='supporter'>Supporter</label>
        <input
          type="text" 
          id='supporter'
          onChange={handleChange}
        />
      </div>
      <input type="submit" value=" Create Pledge" />
    </form>
  )
}

export default CreatePledge