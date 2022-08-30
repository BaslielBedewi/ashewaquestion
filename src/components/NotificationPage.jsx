import React from 'react'
import NotificationList from './NotificationList'

function NotificationPage() {

  const Notifications=[{
    username:'User1',
    question:'Why yf doe aohflkahsfa aoshifoaisnf aoshnfoaisnf aosnfoasf o slkdjfsoljgd slkdngosjd gmsdipogjns dgnsdoig s dgisndogiknsdg s sodingosdngsdg osidnhgosdijng',
    key:'1'
  },
  {
    username:'User2',
    question:'Who',
    key:'2'
  },
  {
    username:'User3',
    question:'What',
    key:'3'
  },
]
  return (
    <div>
      <NotificationList Notifications={Notifications} />
    </div>
  )
}

export default NotificationPage
