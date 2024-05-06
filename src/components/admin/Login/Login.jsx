import { Navbar } from "../Header/Navbar";
import img from "../Image/login 1.png";
import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/Dashboard")
  
  };
  return (
    <div>
      <div class="container" className="page">
        <div className="w-100% h-100%">
          <div class="row w-100% h-100%">
            <div class="col-md-7">
              <img src={img} class="w-100 h-100" height={'600'} alt="width 100%" ></img>
            </div>
            <div class="col-md-3">
              <form>
                <div class="form-group">
                  <h2 className="login1" >Login</h2>
                  <label for="exampleInputEmail1"className="login">Email</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1" className="login">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div><p className="forgot">Forgot Password ?</p>
                  <p className="not">Not a user? Register Now</p></div>
            
                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Log in<button onClick={handleLogin} className='bg-dark'></button> </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
<img src={img} className="text-center bg-dark w-100vh" ></img>


export default Login