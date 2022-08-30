import ashewalogo from "../assets/ashewaLogo.png";
import { Link } from "react-router-dom";
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { useState } from "react";

function Nav() {
  const [notify, setnotify] = useState(true)

  //this will change based on the notification, if there is notification or not
  //the default is true just to make working on it easy
  const handlenotify=()=>
  {
     setnotify(false)
  }

   
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-lg font-Bahnschrift">
        <img src={ashewalogo} alt="" className="w-20" />
        <div className="mt-14 mr-4 ml-10 ">
          <Link
            to="/dashboard"
            className=" mr-24 text-grey border-primary focus:text-primary hover:text-primary hover:border-b-4 transition-all"
          >
            Dashboard
          </Link>
          <Link
            to="/questions"
            className=" mr-24 text-center text-grey border-primary focus:text-primary hover:text-primary hover:border-b-4 transition-all"
          >
            Add Question and Answer
          </Link>
          <Link
            to="/tables"
            className="text-grey border-primary hover:text-primary focus:text-primary hover:border-b-4 transition-all"
          >
            Table
          </Link>
          
        </div>
        <div className="flex">
        <div className="mr-5 mt-1 text-grey hover:text-primary">
        <Link onClick={handlenotify} to={"/NotificationPage"}>
         {notify ? <div className="absolute bg-redish ml-2 w-2 h-2  p-0.5 rounded-xl animate-ping"/>:""}
         <FaBell />
         </Link>
         </div>
        <Link to={"/ashewaquestion"} className="pr-7 text-dim hover:text-primary">
          Logout
        </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
