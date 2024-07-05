import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./layout/layout.component";
import "./App.css";
import Authentication from "./auth/auth.component";
import LoginComponent from "./pages/login/login.component";
import CustomerComponent from "./pages/customer/cust.component";
import InventoryComponent from "./pages/inventory/inventory.component";
import Order from "./pages/order/order.component";
import NotFound from "./pages/notfound/notfound.component";
import UserComponent from "./pages/user/user.component";
import ViewUser from "./pages/user/user.view/view.user";
import ViewCustomer from "./pages/customer/cust.view/view.cust";
import SaleComponent from "./pages/order_detail/order_detail.component";
import ViewOrderDetail from "./pages/order_detail/view.order_detail";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route path="/" element={<LayoutComponent />}>
          <Route index path="" element={<div>Dashboard</div>} />
          <Route path="customer" element={<CustomerComponent/>} />
          <Route path="customer/:id" element={<ViewCustomer/>} />
          <Route path="user" element={<UserComponent/>} />
          <Route path="user/:id" element={<ViewUser/>} />
          <Route path="orders" element={<Order/>} />
          <Route path="ordersdetail" element={<SaleComponent/>} />
          <Route path="ordersdetail/:id" element={<ViewOrderDetail/>} />
          <Route path="inventory" element={<InventoryComponent />} />

        </Route>
      </Route>
        
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
