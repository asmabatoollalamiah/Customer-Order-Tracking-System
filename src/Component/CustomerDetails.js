import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Orders from "./Orders";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

function CustomerDetails(props) {
    const location = useLocation()
    console.log(location.state.id)

    let [state, setState] = useState('')

    var elements = ``
    
    
    function getCustomerList() {

        axios({
            url: `http://localhost:8089/customers/${location.state.id}`,
            method: 'get',
        }).then(res => {
            const data = res.data;
            
            console.log("asma"+state) 
            elements = ` <table>
            <tr>
              <th>Customer Id</th>
              <td>${data.customerId}</td>
            </tr>
            <tr>
            <th>First Name</th>
            <td>${data.firstName}</td>
            </tr>
            <tr>
            <tr>
            <th>Last Name</th>
            <td>${data.lastName}</td>
            </tr>
            <tr>
            <th>Address</th>
            <td>${data.address}</td>
            </tr>
            <tr>
            <th>City</th>
            <td>${data.city}</td>
            </tr>
            <tr>
            <th>State</th>
            <td>${data.state}</td>
            </tr>
            <tr>
            <th>Zip</th>
            <td>${data.zip}</td>
            </tr>
            <tr>
            <th>Country</th>
            <td>${data.country}</td>
            </tr>
            <th>Phone Number</th>
            <td>${data.phoneNumber}</td>
            </tr>
            <tr>
            <th>Email</th>
            <td>${data.email}</td>
            </tr>
            <tr>
            </table>`
           state = { elements };
            setState(elements)
           // setState({data})
            console.log("sooo"+JSON.stringify(data))
        }).catch(err => {
            console.log(err)
        });

    }

    useEffect(() => {
        console.log("Customer Details")
        getCustomerList()
    }, [""])

    return (

        <React.Fragment>
            <div className="flex-vertical" style={{ marginLeft: "20px" }}>

                <header>
                    <h1>Customer Details</h1>
                </header>
             
                <div dangerouslySetInnerHTML={{__html: state}}/>
                <p></p>

                <Link to="/orders/" state={{ id: location.state.id, customerName: location.state.customerName }}>  <button class="button button1">My Orders</button> </Link>

            </div>
        </React.Fragment>
    );

}

export default CustomerDetails;
