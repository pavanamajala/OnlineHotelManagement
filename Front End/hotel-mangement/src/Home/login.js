// import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import download from '../Images/welcome.png'
import axios from 'axios';
import { useState } from "react";


export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState('login');

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleApi = () => {
    if (!email) {
      document.getElementById("userValidate").innerHTML = "Username can't be empty";
    } else if (!password) {
      document.getElementById("passValidate").innerHTML = "Password can't be empty";
    } else if (password.length < 4) {
      document.getElementById("passValidate").innerHTML = "Password should have minimum 4 characters";
    }
    setLoading("Logging in...")


    axios.post('http://13.49.68.81:8888/user/authenticate', {
      username: email,
      password: password

    }).then(result => {
      // console.log(result)
      // const role = result.data.authorities[0].authority;

      // var role_data = result.data.jwt
      // var words_split = role_data.split(" ")
      // var role = words_split[1]

      // if(result.response === 200){
      //   alert("ok");
      // }
      const role = result.data;
      // localStorage.setItem("role", role);
      // localStorage.setItem("user", JSON.stringify(words_split[0]));
      // localStorage.setItem("username", email);
      if (role === "owner") {
        navigate('/owner', true);
      } else if (role === "manager") {
        navigate('/manager', true);
      } else if (role === "receptionist") {
        navigate('/receptionist', true);
      } else {
        alert('Invalid Credentials');
      }
    })
      .catch(error => {
        // alert('failed to login')
        // console.log(error.response)
        console.log(error)
        setLoading("login")

        if (error.response.status === 401 && email && password) {
          alert('You are username/password are incorrect')
        }
        if (error.response.status === 403 && email && password) {
          alert('You are unauthorized')
        }

      })
  }

  return (
    <div className="container ">
      <div className='pavhometxt'><img className='pavhomeimg' src={download} alt=''></img>
      </div>
      <div className="row pavhomelogin">
        <div className="col-md-4 offset-md-8 border rounded p-4 mt-5 shadow pavhombg">
          <h2 className="text-center m-4"><u>Login</u></h2>
          <div className="mb-3">
            <label htmlFor="user" className="form-label">
              <b> Username:</b>
            </label>
            <input className="form-control" value={email} onChange={handleEmail} type="text" placeholder="Enter Username" />
            <p className="validatered" id="userValidate"></p>

          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              <b> Password:</b>
            </label>
            <input className="form-control" value={password} onChange={handlePassword} type="password" placeholder="Enter Password" />
            <p className="validatered" id="passValidate"></p>

          </div>

          <button className="btn btn-primary pavhomebut" onClick={handleApi}>{loading}</button><br /><br />
          <div className="text-centre">&emsp;
            <b>Didn't Have an account <a href="./register">Register here</a></b>
          </div>
        </div>

      </div>
    </div>

  );

}

