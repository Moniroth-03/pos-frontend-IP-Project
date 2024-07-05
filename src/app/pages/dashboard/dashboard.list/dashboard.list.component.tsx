import React from "react";
import { FaDollarSign, FaUsers, FaReceipt } from "react-icons/fa";

// Define the prop types
interface ListDashboardComponentProps {
  title: string;
  sale: number;
  customer: number;
  order: number;
}

const ListDashboardComponent: React.FC<ListDashboardComponentProps> = ({
  title,
  sale,
  customer,
  order,
}) => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg w-full mb-4">
      {" "}
      {/* Updated to shadow-lg */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <div className="flex items-center p-4 overflow-scroll bg-gray-100 rounded-lg shadow-md">
          {" "}
          {/* Keep shadow-md for inner cards */}
          <div className="p-3 mr-4 bg-teal-100 text-teal-600 rounded-lg">
            <FaDollarSign size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Sales</div>
            <div className="text-xl sm:text-2xl font-bold">${sale}</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="p-3 mr-4 bg-yellow-100 text-yellow-600 rounded-lg">
            <FaUsers size={24} />
          </div>
          <div className=" overflow-x-scroll overflow-y-hidden">
            <div className="text-sm text-gray-600">Customers</div>
            <div className="text-xl sm:text-2xl font-bold">{customer}</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md">
          <div className="p-3 mr-4 bg-pink-100 text-pink-600 rounded-lg">
            <FaReceipt size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Orders</div>
            <div className="text-xl sm:text-2xl font-bold">{order}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDashboardComponent;
