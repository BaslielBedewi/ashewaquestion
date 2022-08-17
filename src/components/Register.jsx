import SpinFC from "antd/lib/spin";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import backicon from "../assets/backicon.png";

function Register() {
   
   const [name,setname]=useState('');
   const [phonenumber,setPhonenumber]=useState('');
   const [password,setPassword]=useState('');
   const [showpass, setshowpass] = useState(false)
   const [uncomfirmedpassword,setunPassword]=useState('');
   const [registering,setregistering]=useState(false);
   const [incorrect,setincorrect]=useState(false);
   const history=useHistory();
   
   useEffect(() => {
     if(uncomfirmedpassword===password)
     {
      setincorrect(false)
     }
     else
     {
     setincorrect(true)
     }
   }, [password,uncomfirmedpassword])
   
   const show=()=>
 {
  setshowpass(!showpass)
 }
   const handlenameinput=e=>
  {
     const nameformatted=e.target.value.replace(/[^a-z]/gi,'')
     setname(nameformatted);
  };
  const handlephoneinput=e=>
  {
     const phoneformatted=e.target.value.replace(/\D/g,'')
     setPhonenumber(phoneformatted);
  };

  const handlepassword=(e)=>
  {
    setPassword(e.target.value)
  }


  const handlesubmit=(e)=>
  {
    if(uncomfirmedpassword===password)
    {
      setregistering(true)
      history.push('/dashboard')
    }
    else
    {
      setincorrect(true)
    }
    
  }
  

  return (
    <div className="fixed flex justify-center items-center top-0 left-0 w-full h-screen bg-gray-200">
        <div className=" bg-white w-80 h-auto shadow-xl rounded-lg">
            <form onSubmit={handlesubmit}>
              <Link to="/">
                <img src={backicon} alt="" className="w-5 m-2" />
              </Link>
              <h1 className="text-center text-blackdim font-semibold text-[25px] w">
                Register
              </h1>
              <div className="h-0.5 bg-primary m-3 text-blackdim"></div>
              <div className=" h-0.5 ml-8 m-3 text-blackdim">Full-Name </div>
              <input
                type="text"
                className="pl-1 ml-8 h-8 m-3 border-2 border-blackdim rounded-md w-64"
                required
                maxLength={"30"}
                minLength={"6"}
                value={name}
                onChange={e=>handlenameinput(e)}
              />
              <div className=" ml-8 text-blackdim"> phone-number </div>
              <input
                type="text"
                value={"+251"}
                readOnly
                className=" ml-8 h-8 w-12 border-2 border-blackdim rounded-md text-blackdim"
              />
              <input
                type="text"
                className="pl-1 m-2 h-8 border-2 w-[62.5%] border-blackdim rounded-md"
                maxLength={"9"}
                minLength={"9"}
                required
                value={phonenumber}
                onChange={e=>handlephoneinput(e)}
              />
              <br />
              <div className="pl-1 h-0.5 ml-8 m-3 text-blackdim"> Password </div>
              <input
                type={showpass ? "text":"password"}
                className="pl-1 ml-8 h-8 m-3 border-2 border-blackdim rounded-md w-64"
                required
                maxLength={"30"}
                minLength={"8"}
                value={uncomfirmedpassword}
                onChange={(e)=>setunPassword(e.target.value)}
                
              />
              <div className="pl-1 h-0.5 ml-8 m-3 mt-0 text-blackdim">Confirm Password </div>
              <input
                type={showpass ? "text":"password"}
                className="pl-1 ml-8 h-8 m-3 mb-1 border-2 border-blackdim rounded-md w-64"
                required
                maxLength={"30"}
                minLength={"8"}
                value={password}
                onChange={handlepassword}
              /><p onClick={show} className="cursor-pointer text-blackdim text-left ml-9 mt-0 mb-3 hover:text-primary">show password</p>
              {incorrect ? <div className="m-0 p-0 text-center text-redish">password doesn't match</div>:""}
              {incorrect && <button disabled className="ml-8 h-8 m-3 w-64 bg-primary p-1 px-14 text-white rounded-md">Register</button>}
              {!incorrect && !registering && <button className="ml-8 h-8 m-3 w-64 bg-primary p-1 px-14 text-white rounded-md
               hover:bg-white hover:text-black hover:shadow-md transition-all">Register</button>}
              {registering && <div className="text-center"><SpinFC /></div>}
            </form>
          </div>
        </div>
  );
}

export default Register;
