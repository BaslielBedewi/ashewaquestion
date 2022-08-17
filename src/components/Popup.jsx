import React, { useEffect, useState } from 'react'
import close from "../assets/close.png"

function Popup({
  initialValue,
  isVisible,
  onCancel
}) {
  const [result, setResult] = useState(initialValue)
  useEffect(() => {
    setResult(initialValue)
  }, [initialValue])
  console.log(result)

  const handlesubmit = (e) => {
    e.preventDefault()
    onCancel(false)
  }
  return isVisible ? (
    <div className="fixed top-0 left-0 w-full h-screen bg-transparent">
      <div className='fixed top-[5%] left-[20%] w-[60%] h-auto bg-white pt-8 p-9 shadow-lg rounded-md'>
        <form onSubmit={handlesubmit}>
          <button className='ml-[96%]' onClick={() => onCancel(false)}><img src={close} alt="" className='w-3' /></button>
          <div className="flex items-center justify-center flex-wrap ">
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter Question'
              className=' border-2  border-primary w-[34rem] rounded-md p-1'
              defaultValue={result.questions}
              onChange={(e) => setResult({
                ...result,
                questions: e.target.value
              })}
            >
            </textarea>
          </div>
          <div className="flex items-center justify-center flex-wrap ">
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter Answer'
              className=' mt-8 border-2  border-primary  w-[34rem] rounded-md p-1'
              defaultValue={result.answers}
              onChange={(e) => setResult({
                ...result,
                answers: e.target.value
              })}
            >
            </textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className='ml-96 bg-primary p-1 px-14 m-1 text-white rounded-sm hover:bg-white hover:text-black hover:shadow-md transition-all'>Update</button>
          </div>
        </form>
      </div>
    </div>
  ) : <></>
}

export default Popup;