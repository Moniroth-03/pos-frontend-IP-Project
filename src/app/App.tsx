import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./layout/layout.component";
import "./App.css";
import Authentication from "./auth/auth.component";
import LoginComponent from "./pages/login/login.component";
import CustomerComponent from "./layout/navigations-components/customers/customer.component";
import CustomerDetailComponent from "./layout/navigations-components/customers/customerdetail.component";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="/dashboard" element={<div>Dashboard</div>} />

          <Route path="/orders" element={<div>Orders</div>} />
          <Route path="/ordersdetail" element={<div>Orders Detail</div>} />
          <Route path="/inventory" element={<div>Inventory</div>} />
          <Route path="/customer" element={<CustomerComponent/>} />
          <Route path="/customer/:id" element={<CustomerDetailComponent/>} />
          <Route path="/user" element={<div>User</div>} />

          <Route path="*" element={<div>notfound</div>} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
