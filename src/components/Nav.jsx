import ashewalogo from "../assets/ashewaLogo.png";
import { Link } from "react-router-dom";
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { IconContext } from "react-icons";
function Nav() {
  return (
    <>
      <div className="flex justify-between items-center bg-white shadow-lg font-Bahnschrift">
        <img src={ashewalogo} alt="" className="w-20" />
        <div className="mt-14 mr-5 ">
          <Link
            to="/dashboard"
            className=" mr-24 text-grey border-primary active:text-primary hover:text-primary hover:border-b-4 transition-all"
          >
            Dashboard
          </Link>
          <Link
            to="/questions"
            className=" mr-24 text-center text-grey border-primary active:text-primary hover:text-primary hover:border-b-4 transition-all"
          >
            Add Question and Answer
          </Link>
          <Link
            to="/tables"
            className="text-grey border-primary hover:text-primary hover:border-b-4 transition-all"
          >
            Table
          </Link>
        </div>
        <IconContext.Provider value={{color:"blue"}} >
         <FaBell />
         </IconContext.Provider>
        <Link to={"/"} className="pr-7 text-dim hover:text-primary">
          Logout
        </Link>
      </div>
    </>
  );
}

export default Nav;
