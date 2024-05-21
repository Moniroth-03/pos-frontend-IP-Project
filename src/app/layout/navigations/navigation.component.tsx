import { NavLink } from "react-router-dom";
import { FaDesktop } from "react-icons/fa6";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa";
let arr = [
  { name: "Dashboard", path: "/dashboard", icon: <FaDesktop /> },
  { name: "Orders", path: "/orders", icon: <FaFileInvoiceDollar /> },
  { name: "OrdersDetail", path: "/ordersDetail", icon: <FaFileInvoice /> },
];

const NavigationComponent = () => {
  return (
    <div className="flex flex-col gap-2 w-[150px] h-screen ">
      {arr.map((obj) => (
        <NavLink
          to={obj.path}
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-green-200 to-blue-300 text-white p-2 rounded-md flex gap-3 items-center"
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
