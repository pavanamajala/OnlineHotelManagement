import axios from "axios";
import React, { useEffect,useState } from "react";
// import { Link, useParams } from "react-router-dom";

export default function Payment(){


    const [user, setUser] = useState({
        reservationId: "",
        roomId:"",
        guestId:"",
        checkInDate: "",
        checkOutDate:"",
        noOfGuest:"",
        totalPrice:""
      });
    
      // const { reservationId } = useParams();
    
      useEffect(() => {
        loadUser();
      },[]);
    
      const loadUser = async () => {
        const result = await axios.get(`http://16.171.133.10:8888/reservation/view/${11}`);
        setUser(result.data);
      };
    

    return(
        <div>
            <div className="container">
                 <div className="row">
                     <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                        <div className="text-center"><h3><u>PAYMENT</u></h3></div>
                            <table ><br></br>
                                <tr><td><b>Room Rent &nbsp; &nbsp;</b>&ensp;&ensp;&ensp;&ensp;</td>
                                <td>:</td>&ensp;&ensp;&ensp;&ensp;
                                <td>{user.totalPrice}</td>
                                </tr>
                                <tr><td><b>GST(10%)&nbsp; &nbsp;</b>&ensp;&ensp;&ensp;&ensp;</td>
                                <td>:</td>&ensp;&ensp;&ensp;&ensp;
                                     <td>{user.totalPrice*0.15}</td>
                                </tr>
                                <tr><td><b>Service tax(5%)&nbsp; &nbsp;</b>&ensp;&ensp;&ensp;&ensp;</td>
                                <td>:</td>&ensp;&ensp;&ensp;&ensp;
                                     <td>{user.totalPrice*0.05}</td>
                                </tr>
                                <tr><td><b>Other tax(2%)&nbsp; &nbsp;</b>&ensp;&ensp;&ensp;&ensp;</td>
                                <td>:</td>&ensp;&ensp;&ensp;&ensp;
                                     <td>{user.totalPrice*0.02}</td>
                                </tr>
                                <tr><td><b>Total cost&nbsp; &nbsp;<td>:</td></b>&ensp;&ensp;&ensp;&ensp;</td>
                                <td>:</td>&ensp;&ensp;&ensp;&ensp;
                                     <td>{(user.totalPrice*0.02)+(user.totalPrice*0.05
                                        +user.totalPrice*0.15)+(user.totalPrice)}</td>
                                </tr><br></br>
                                <tr>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;
                                <a className="btn btn-primary float-left" href="/reservation/viewall">&ensp;&ensp;CASH&ensp;&ensp;</a>&ensp;&ensp;&ensp;&ensp;
                                <td></td>
                                <a className="btn btn-primary float-right" href="/reservation/viewall">Pay Online</a>
                                </tr>
                            </table><br></br>
                     </div>
                </div>
            </div>
        </div>
    );
}