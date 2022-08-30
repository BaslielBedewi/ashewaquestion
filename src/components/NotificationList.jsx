import React, { useState } from 'react'
import AnswerNotificationPopUp from './AnswerNotificationPopUp'

function NotificationList({
  Notifications
})
{
  const [isVisible,setVisible]=useState(false)
  const [intialQuestion,setInitialQuestion]=useState({})
  const [intialUser,setInitialUser]=useState({})
  return (
    <div>
    {Notifications.map((N)=>
    <div onClick={()=>{setVisible(true); setInitialQuestion(N.question);setInitialUser(N.username); }} className="cursor-pointer ml-40 mr-40 mt-5 mb-5 shadow-xl h-fill  rounded-md" key={N.key}>
    <h1 className='text-primary text-base pt-5 pl-5'>Username: <p className='text-grey text-base font-light'>{N.username}</p></h1>
    <h2 className='pt-2 text-primary text-base pl-5'>Question: <p className='text-grey text-base font-light'>{N.question}</p></h2>
    </div>)}
    <AnswerNotificationPopUp isVisible={isVisible} onCancel={setVisible} question={intialQuestion} user={intialUser}/>
    </div>
  )
}

export default NotificationList
