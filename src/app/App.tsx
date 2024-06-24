import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./layout/layout.component";
import "./App.css";
import Authentication from "./auth/auth.component";
import LoginComponent from "./pages/login/login.component";
import InventoryComponent from "./pages/inventory/inventory.component";
import Order from "./pages/order/order.component";
import NotFound from "./pages/notfound/notfound.component";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route path="/" element={<LayoutComponent />}>
          <Route index path="" element={<div>Dashboard</div>} />

          <Route path="orders" element={<Order/>} />
          <Route path="ordersdetail" element={<div>Orders Detail</div>} />
          <Route path="inventory" element={<InventoryComponent />} />

        </Route>
      </Route>
        
      <Route path="*" element={<NotFound/>} />
      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
