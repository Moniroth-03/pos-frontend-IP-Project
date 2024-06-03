import { Route, Routes } from "react-router-dom";
import LayoutComponent from "./layout/layout.component";
import "./App.css";
import Authentication from "./auth/auth.component";
import LoginComponent from "./pages/login/login.component";
import InventoryComponent from "./pages/inventory/inventory.component";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Authentication />}>
        <Route path="/" element={<LayoutComponent />}>
          <Route index path="dashboard" element={<div>Dashboard</div>} />

          <Route path="orders" element={<div>Orders</div>} />
          <Route path="ordersdetail" element={<div>Orders Detail</div>} />
          <Route path="inventory" element={<InventoryComponent />} />

          <Route path="*" element={<div>notfound</div>} />
        </Route>
      </Route>

      <Route path="/login" element={<LoginComponent />} />
    </Routes>
  );
}

export default App;
