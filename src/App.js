import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link }  from "react-router-dom";
import './App.css';
import Main from './Component/Main';
import CustomerDetails from './Component/CustomerDetails';
import Orders from './Component/Orders';
import OrderDetails from './Component/OrderDetails';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Main/>}/>
       <Route path="/child" element={<CustomerDetails/>}/>
       <Route path="/orders" element={<Orders/>}/>
       <Route path="/orderDetails" element={<OrderDetails/>}/>
      </Routes>
      </Router>
      {/* <Main/> */}
  </div>
  );
}

export default App;
