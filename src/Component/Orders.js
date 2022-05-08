import React, { useState, useEffect } from "react";
import OrderDetails from "./OrderDetails";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';

function Orders(props) {
  const location = useLocation()
  console.log(location.state.id)

  let [value, setValue] = useState([])

  var elements =  []

  function orderList() {
    axios({
      url: `http://localhost:8089/customers/${location.state.id}/orders`,
      method: 'get',
  }).then(res => {
      const data = res.data;
      console.log("asma"+data) 
      elements = data;
      setValue(elements)
     // setState({data})
      console.log("sooo"+JSON.stringify(data))
  }).catch(err => {
      console.log(err)
  });
  }
  useEffect(() => {
    console.log("Order")
    orderList()
  }, [""])


  return (
    <React.Fragment>
      <div className="flex-vertical" style={{ marginLeft: "20px" }}>
        <header>
          <h1>Order Lists</h1>
        </header>
        <table>
      <tr>
        <th>Order Id</th>
        <th>Order Amount</th>
        <th>Order Date</th>
        <th>Customer Id</th>
        <th>Customer Name</th>
      </tr>{value.map(order => <tr><td><Link key={order.orderId} to='/orderDetails/' state={{ customerId: location.state.id, customerName: location.state.customerName  ,orderId: order.orderId }}>{order.orderId}</Link></td><td>{order.orderAmount}</td><td>{order.orderDate}</td><td>{location.state.id}</td><td>{location.state.customerName}</td></tr>)}</table>
      </div>
    </React.Fragment>
  );

}

export default Orders;