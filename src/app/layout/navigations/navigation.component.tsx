import { Link } from "react-router-dom";

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
          <Link to={obj.path}>{obj.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationComponent;
