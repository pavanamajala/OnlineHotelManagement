import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Auth from '../Auth/auth';

export default function UpdateInventory() {

    let navigate = useNavigate();

    const { inventoryId } = useParams()

    const [user, setUser] = useState({
        inventoryType: "",
        inventoryName: "",
        inventoryStock: ""
    });


    const { inventoryType, inventoryName, inventoryStock } = user

    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value })

    };

    useEffect(() => {
        loadUser()
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://16.171.135.69:8888/inventory/update/${inventoryId}`, user, { headers: Auth() });
        navigate("/inventory/viewall")
    };

    const loadUser = async () => {
        const result = await axios.get(`http://16.171.135.69:8888/inventory/view/${inventoryId}`, { headers: Auth() });
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"><u>Update Inventory</u></h2>

                    <form onSubmit={(e) => onSubmit(e)}>
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
                                onChange={(e) => onInputChange(e)}
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
                                onChange={(e) => onInputChange(e)}
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
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                        <Link to="/inventory/viewall" className="btn btn-outline-danger mx-2">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}
