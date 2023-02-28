import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"

const Signup=(props)=>{
    const [signupState, setSignupState]=useState({});
    const navigate=useNavigate();

    const handleUser=()=>{
        if(signupState.password===signupState.cpassword){
            props.setAllUser([...props.allUser,signupState])
            navigate("/login")
        }else{
            alert("Password and Confirm password are not matching.")
        }
        
    }

    return (
        <>
            <div className="signup-container">
                <div className="signup-innerContainer">
                    <form>
                        <p>Create new Account</p>
                        <div>
                            <input type="text" placeholder="UserName" id="username" name="username" onChange={(e)=>{setSignupState({...signupState, username:e.target.value})}}></input>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" id="password" name="password" onChange={(e)=>{setSignupState({...signupState, password:e.target.value})}}></input>
                        </div>
                        <div>
                            <input type="password" placeholder="Confirm Password" id="cpassword" name="cpassword" onChange={(e)=>{setSignupState({...signupState, cpassword:e.target.value})}}></input>
                        </div>
                        <div>
                            <button onClick={handleUser}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;