import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {readExcelFile} from '../../utils/readExcel'
const AddNewQuestions = (props) => {
  const [isLoading,setIsLoading] = useState(true);
  const [isClicked,setIsClicked] = useState(false);

  const history = useHistory();

  const {quizid,total_questions} = props.location.state;
  console.log(quizid,total_questions);

  const handleManualQuestInput = () => {
    history.push({
      pathname:'/quizsetnewquests',
      state: {quizid,total_questions}
    })
  }

  const handleUploadFile = (e) => {
    setIsClicked(true)
    readExcelFile(quizid,e)
    history.push('/quizsetquiz')
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 2000);
  }

  return (
    <div className='container addmethod'>
      <div className="method-box">
        <h3 className="methodh2">Choose Add Questions method</h3>
        <input type="file" accept=".xls,.xlsx" onChange={handleUploadFile}
          class="form-inputs"
        />
        {
          !isClicked && (<>
            <h3>OR</h3>
            <button onClick={handleManualQuestInput} type='submit' className="form-submit-button">Add Questions Manually</button>
          </>)
        }

        {/* {
        (isClicked && isLoading) ? <h5>Loading!!!</h5> : isClicked ?  (
          <>
          <h5>Uploaded</h5>
          <Link to='/quizsetquiz'>Go back to Quiz Dashboard</Link>
          </>
        ) : ''
      } */}
      </div>
      
    </div>
  )
}

export default AddNewQuestions
