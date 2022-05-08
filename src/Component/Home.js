
import React from "react";
import CustomerDetails from "./CustomerDetails";
import axios from 'axios';
import { Link } from "react-router-dom";


class Home extends React.Component {

  constructor() {
    super();
    this.state = { elements: [] }
  }

  componentDidMount() {
    this.getCustomerList()
  }

  getCustomerList() {

    axios({
      url: "http://localhost:8089/customers",
      method: 'get',
    }).then(res => {

      this.state.elements = res.data

      console.log(this.state.elements)

      this.setState({
        elements: this.state.elements
      })
    }).catch(err => {

    });

  }

  render() {
    return (
      <React.Fragment>

        <div className="flex-vertical" style={{ marginLeft: "100px" }}>

          <header>
            <h2>Customer Lists</h2>
          </header>
          <table>
            <tr>
              <th>Customer Id</th>
              <th>Frist Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          {this.state.elements.map(data => <tr><td><Link key={data.customerId} to='/child/' state={{ id: data.customerId, customerName: data.firstName+" "+data.lastName }}>{data.customerId}</Link></td><td>{data.firstName}</td><td>{data.lastName}</td><td>{data.phoneNumber}</td><td>{data.email}</td></tr>)}
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;