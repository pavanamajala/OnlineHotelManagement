import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Auth from '../Auth/auth';

export default function AddInventory() {

    let navigate=useNavigate();

    const [user, setUser]=useState({
        inventoryId: "",
        inventoryType:"",
        inventoryName:"",
        inventoryStock: ""
    });

    // function validateform(){  
    //     var id=document.getElementById("id"); 
    //     let text;
    //       if(id==null){
    //         alert("id can't be null")
    //       } else{
    //         onSubmit();
    //         // {(e)=>onSubmit(e)}
    //       }
    //  }  

     const{inventoryId,inventoryType,inventoryName,inventoryStock}=user

    const onInputChange=(e)=>{

        setUser({ ...user, [e.target.name]: e.target.value})

    };

    const onSubmit=async (e)=> {
        if(!inventoryId){
            document.getElementById("text").innerHTML = "ID can't be empty";
        } else{
        e.preventDefault();
        await axios.post("http://13.49.68.81:8888/inventory/add", user, {headers:Auth()});
        navigate("/inventory/viewall")
        }
    };

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4"><u>Register Inventory</u></h2>

          <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                        <label htmlFor="Id" className="form-label">
                            <b> ID</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter ID"
                            name="inventoryId"
                            value={inventoryId}
                            onChange={(e)=>onInputChange(e)}
                            id="id"
                        />
                    </div>
                    <p className='text-danger' id="text"></p>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> Name</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter name"
                            name="inventoryName"
                            value={inventoryName}
                            onChange={(e)=>onInputChange(e)}
                            id="name"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> Type</b>
                        </label>
                        <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter Type"
                            name="inventoryType"
                            value={inventoryType}
                            onChange={(e)=>onInputChange(e)}
                            id="type"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Name" className="form-label">
                            <b> Stock</b>
                        </label>
                        <input
                            type={"number"}
                            className="form-control"
                            placeholder="Enter Stock"
                            name="inventoryStock"
                            value={inventoryStock}
                            onChange={(e)=>onInputChange(e)}
                            id="stock"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary" >Submit</button>
                    <Link to="/inventory/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                 </form>
        </div>
      </div>
    </div>
  )
}
