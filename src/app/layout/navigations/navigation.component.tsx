import { NavLink } from "react-router-dom";
import { FaBoxOpen, FaDesktop, FaUser, FaUserTag } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa";
const arr = [
  { name: "Dashboard", path: "/", icon: <FaDesktop /> },
  { name: "Orders", path: "/orders", icon: <FaFileInvoiceDollar /> },
  { name: "Orders Detail", path: "/ordersdetail", icon: <FaFileInvoice /> },
  {name: "Inventory", path: "/inventory", icon: <FaBoxOpen/> },
  {name: "Customer", path: "/customer", icon: <FaUserTag/>},
  {name: "User", path: "/user", icon: <FaUser/>}
];

const NavigationComponent = () => {
  return (
    <div className="flex flex-col gap-2 w-[230px] h-screen border shadow-md rounded-sm bg-white border-t-0 p-4">
      {arr.map((obj,k) => (
        <NavLink key={k}
          to={obj.path}
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-green-400 to-blue-500 text-white p-2 rounded-md flex gap-3 items-center"
              : " flex gap-3 items-center p-2"
          }
        >
          {obj.icon} {obj.name}
        </NavLink>
      ))}
    </div>
  );
};

export default NavigationComponent;
