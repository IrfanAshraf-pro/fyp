import React from 'react'

const NotificationRow = ({notification}) => {
  return (
    <div className="flex w-[90%] items-center justify-between gap-2 p-2 px-3  bg-slate-500 rounded-3">
      <p className="text-xs md:text-base text-white -mb-[1px]">{notification.studentname}</p>
      <p className="text-xs md:text-base text-white -mb-[1px]">{notification.coursename}</p>
      <p className="text-xs md:text-base text-white -mb-[1px]">{notification.slot}</p>
      <div className="flex flex-col gap-1 lg:flex-row">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-base py-1 px-3 hover:shadow rounded-2 ">Accept</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs md:text-base py-1 px-3 hover:shadow rounded-2">Reject</button>
      </div>
    </div>
  )
}

export default NotificationRow