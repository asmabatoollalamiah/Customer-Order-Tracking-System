import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

function OrderDetails(props) {

  var [count, setCount] = useState(0)

  const location = useLocation()
  console.log(location.state.orderId)
  console.log(location.state.customerId)

  var elements = ``

  function getOrderDetails() {

    axios({
      url: `http://localhost:8089/customers/${location.state.customerId}/orders/${location.state.orderId}`,
      method: 'get',
  }).then(res => {
      const data = res.data;
      console.log("asma"+count) 
      elements = ` <table>
      <tr>
        <th>Order Id</th>
        <td>${data.orderId}</td>
      </tr>
      <tr>
      <th>Order By</th>
      <td>${data.orderAmount}</td>
      </tr>
      <tr>
      <th>Order Date</th>
      <td>${data.orderDate}</td>
      </tr>
      <tr>
        <th>Customer Id</th>
        <td>${location.state.customerId}</td>
      </tr>
      <tr>
        <th>Customer Name</th>
        <td>${location.state.customerName}</td>
      </tr>`;
      data.itemsList.map(item=> 
      elements += `<tr>
      <th>Item Id</th>
      <td>${item.itemId}</td>
      </tr>
      <tr>
      <th>Item Name</th>
      <td>${item.itemName}</td>
      </tr>
      <tr>
      <th>Item Description</th>
      <td>${item.itemDesc}</td>
      </tr>
      <tr>
      <th>Item Price</th>
      <td>${item.itemPrice}</td>
      </tr>`);
      elements +=`</table>`
      count = { elements };
      setCount(elements)
     // setState({data})
      console.log("sooo"+JSON.stringify(data))
    }).catch(err => {
      console.log(err)
    });

    setCount(count + 1)

  }

  useEffect(() => {
    console.log("Order Details")
    getOrderDetails()
  }, [""])



  return (
    <React.Fragment>
      <div className="flex-vertical" style={{ marginLeft: "20px" }}>

        <header>
          <h1>Orders Details</h1>
          <div dangerouslySetInnerHTML={{__html: count}}/>
        </header>

      </div>
    </React.Fragment>
  );

}

export default OrderDetails;