import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"


const Login = (props) => {
    const [signupState, setSignupState] = useState({});
    const navigate = useNavigate();

    const handleLogin = () => {
        let isvalid=false
        for(let i=0;i<props.allUser.length;i++){
            if(props.allUser[i].username===signupState.username){
                isvalid=true;
            }
        }
        if(isvalid){
            localStorage.setItem("name",signupState.username)
            navigate("/home")
        }else{
            alert("Not a valid User ! Please Sign-Up before logging in.")
        }
        
    }

    return (
        <>
            <div className="login-container">
                <div className="login-innerContainer">
                    <form>
                        <p>Enter your Credentials</p>
                        <div>
                            <input type="text" placeholder="UserName" id="username" name="username" onChange={(e) => { setSignupState({ ...signupState, username: e.target.value }) }}></input>
                        </div>
                        <div>
                            <input type="password" placeholder="Password" id="password" name="password" onChange={(e) => { setSignupState({ ...signupState, password: e.target.value }) }}></input>
                        </div>
                        <div>
                            <button onClick={handleLogin}>Submit</button>
                        </div>
                        <div>
                            <p onClick={() => navigate("/")} className="btn">Sign-Up</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;