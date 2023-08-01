// import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import download from '../Images/welcome.png'
import axios from 'axios';
import { useState } from "react";


export default function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setrePassword] = useState('')
  const [role, SetUser] = useState('')
  const loading = 'login';

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleRole = (e) => {
    SetUser(e.target.value)
  }
  const handlerePassword = (e) => {
    setrePassword(e.target.value)
  }

  const handleApi = () => {


    if (!email) {
      document.getElementById("userValidate").innerHTML = "Username can't be empty";
    } else if (!password) {
      document.getElementById("passValidate").innerHTML = "Password can't be empty";
    } else if (password.length < 4) {
      document.getElementById("passValidate").innerHTML = "Password should have minimum 4 characters";
    } else if (password !== repassword) {
      document.getElementById("repassValidate").innerHTML = "Password's didn't match";
    } else {
      axios.post('http://16.171.133.10:8888/user/sign/add', {
        username: email,
        password: password,
        role: role

      }).then(result => {
        // const role = result.data.authorities[0].authority;

        alert(result.data)
        navigate('/login')

      })
    }






  }



  return (


    <div className="container ">
      <div className='pavhometxt'><img className='pavhomeimg' src={download} alt=''></img>
      </div>
      <div className="row pavhomelogin">
        <div className="col-md-4 offset-md-8 border rounded p-4 mt-5 shadow pavhombg">
          <h2 className="text-center m-4"><u>Register</u></h2>
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

          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              <b> Reenter Password:</b>
            </label>
            <input className="form-control" value={repassword} onChange={handlerePassword} type="password" placeholder="Enter Password Again" />
            <p className="validatered" id="repassValidate"></p>

          </div>

          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              <b> Role:</b>
            </label><br></br>
            <div style={{ display: "flex", justifyContent: "space-between", width: "60%" }}>
              <div>
                <input
                  type="radio"
                  id="manager"
                  name="registerbutt"
                  value="manager"
                  onChange={handleRole}
                >
                </input>
                <label htmlFor="manager">Admin </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="receptionist"
                  name="registerbutt"
                  value="receptionist"
                  onChange={handleRole}
                >
                </input>
                <label htmlFor="receptionist">Author</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="manager"
                  name="registerbutt"
                  value="manager"
                  onChange={handleRole}
                >
                </input>
                <label htmlFor="manager">User </label>
              </div>

            </div>


            <p className="validatered" id="passValidate"></p>

          </div>
          {/* <input 
                            type="radio" 
                            id="true" 
                            name="roomAvailable" 
                            value="true"
                            onChange={(e)=>onInputChange(e)}
                            />
                          <label htmlFor="true">Yes</label>
                          <input 
                            type="radio" 
                            id="false" 
                            name="roomAvailable" 
                            value="false"
                            onChange={(e)=>onInputChange(e)}
                            />
                          <label htmlFor="false">No</label><br/> */}

          <button className="btn btn-primary pavhomebut" onClick={handleApi}>{loading}</button><br /><br />

        </div>
        <br></br>
      </div>
    </div>

  );

}

