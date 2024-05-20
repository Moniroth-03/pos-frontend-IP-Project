import { NavLink } from "react-router-dom";

let arr = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Orders", path: "/orders" },
  { name: "OrdersDetail", path: "/ordersDetail" },
];

const NavigationComponent = () => {
  return (
    <div>
      {arr.map((obj) => (
        <div>
          <NavLink
            to={obj.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-gradient-to-r from-green-200 to-blue-300"
                : ""
            }
          >
            {obj.name}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavigationComponent;
