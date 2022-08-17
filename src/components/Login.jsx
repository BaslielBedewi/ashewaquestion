import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
function Login() {
  //stored the country code in a varible
  const cocode="+251"
  const history = useHistory("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setshowpass] = useState(false)
  

  //on click event to store the input phone number without country code
  const handleinput=e=>
  {
     const phoneformatted=e.target.value.replace(/\D/g,'')
     setPhonenumber(phoneformatted);
  };
  //merged the country code with the input phone number
  const fullphonenumber=cocode+phonenumber

  //fullphonenumber is the final phone number you gotta use to check on database
  //password is just password
  const handlesubmit = (e) => {
    
    history.push("/dashboard");
  };
  console.log(fullphonenumber)
 const show=()=>
 {
  setshowpass(!showpass)
 }

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-screen bg-gray-200">
        <div className="bg-white w-80 h-auto shadow-xl rounded-lg pb-5 pt-5">
            <form onSubmit={handlesubmit}>
              <h1 className="text-center text-blackdim font-semibold text-[25px] w">
                Login
              </h1>
              <div className="w-[80%] h-0.5 bg-primary ml-8 m-3 text-blackdim"></div>
              <div className=" ml-8 text-blackdim"> phone-number </div>
              <input
                type="text"
                value={cocode}
                readOnly
                className=" ml-8 h-8 w-12 border-2 border-blackdim rounded-md text-blackdim"
              />
              <input
                type="text"
                className=" pl-1 m-2 h-8 border-2 w-[62.5%] border-blackdim rounded-md"
                maxLength={"9"}
                minLength={"9"}
                autoComplete="off"
                onChange={e=>handleinput(e)}
                value={phonenumber}
                required
              />
              <br />
              <div className=" h-0.5 ml-8 m-3 text-blackdim"> Password </div>
              <input
                type={showpass ? "text":"password"}
                className="p-1 ml-8 h-8 m-3 mb-1 border-2 border-blackdim rounded-md w-64"
                maxLength={"30"}
                minLength={"8"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              /><p onClick={show} className="cursor-pointer text-blackdim text-left ml-8 mt-0 mb-3 hover:text-primary">show password</p>
              <input
                type="submit"
                value="Login"
                className="ml-8 m-3 h-8 w-64 bg-primary p-1 px-14 text-white rounded-md
               hover:bg-white hover:text-black hover:shadow-md transition-all"
              />
              <Link to="/register" className="text-center text-primary">
                <p>Register</p>
              </Link>
            </form>
          </div>
        </div>
  );
}

export default Login;
