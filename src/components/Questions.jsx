import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Questions() {
  const [questions, setquestion] = useState('');
  const [answers, setanswer] = useState('');
  const [isAdding,setisAdding]=useState(false);
  const history=useHistory();
  
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    const QandA ={ questions, answers };
    setisAdding(true)
    fetch("http://localhost:8000/data",
    {
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(QandA)
    }
    ).then(()=>{
      setisAdding(false)
      history.push('/tables');
    })
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="flex items-center justify-center flex-wrap ">
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Question"
            className="mt-8 border-2  border-primary  w-[34rem] rounded-md p-1"
            value={questions}
            onChange={(e) => setquestion(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center flex-wrap ">
          <textarea
            cols="30"
            rows="10"
            placeholder="Enter Answer"
            className="mt-8 border-2 border-primary w-[34rem] rounded-md p-1"
            value={answers}
            onChange={(e) => setanswer(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
         {!isAdding && <button className="ml-96 bg-primary p-1 px-14 m-1 text-white rounded-sm hover:bg-white hover:text-black hover:shadow-md transition-all">
            Add
          </button>}
          {isAdding && <button disabled className="ml-96 bg-primary p-1 px-14 m-1 text-white rounded-sm hover:bg-white hover:text-black hover:shadow-md transition-all">
            Adding...
          </button>}
        </div>
      </form>
    </div>
  );
}

export default Questions;
