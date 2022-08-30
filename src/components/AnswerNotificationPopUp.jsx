import React from 'react'
import close from "../assets/close.png"

function AnswerNotificationPopUp({
    isVisible,
    onCancel,
    question,
    user
}) {
  return isVisible ? (
    <div className=" fixed top-0 left-0 w-full h-screen bg-transparent">
        <div className='fixed top-[5%] left-[20%] w-[60%] h-auto bg-white pt-8 p-9 shadow-lg rounded-md'>
        <form>
        <button className='ml-[96%]' onClick={() => onCancel(false)}><img src={close} alt="" className='w-3' /></button>
        <p className='text-center font-light text-primary'>{user} asked</p>
        <p className='text-center font-light'>{question} ?</p>
        <div className="flex items-center justify-center ">
            <textarea name="" id="" cols="30" rows="10" placeholder='Answer'
              className=' mt-8 border-2  border-primary  w-[34rem] rounded-md p-1'
            >
            </textarea>
        </div>
        <div className="flex items-center justify-center">
        <button className=' bg-primary p-1 px-14 m-5 text-white rounded-sm hover:bg-white hover:text-black hover:shadow-md transition-all'>Answer</button>
        </div>
        </form>
        </div>
    </div>
  ):<></>
}

export default AnswerNotificationPopUp