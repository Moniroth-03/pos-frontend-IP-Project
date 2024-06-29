import React, { useState, useEffect } from "react";
import { FaAd, FaSearch } from "react-icons/fa";
import { FaHouse, FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Customer {
  id: number;
  name: string;
  gender: string;
  email: string;
  purchasePoint: number;
  date: string;
}

const CustomerComponent: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const staticData: Customer[] = [
      {
        id: 1,
        name: "Charng Chhit",
        gender: "male",
        email: "ChharngChhit@gmail.com",
        purchasePoint: 2000,
        date: "09/08/2024",
      },
      {
        id: 2,
        name: "Charng Chhit",
        gender: "male",
        email: "ChharngChhit@gmail.com",
        purchasePoint: 2000,
        date: "09/08/2024",
      },
    ];
    setCustomers(staticData);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-4">
        <div className="flex flex-row justify-between">
          <div className="text-lg flex flex-row justify-start items-center gap-4">
            <FaHouse />
            <div>Customer</div>
          </div>
          <div className="flex item-center gap-2">
          <div className="relative w-[300px]">
        <input
          type="text"
          placeholder="Search items"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border rounded-lg  p-2 pl-10 w-full"
        />
        <FaSearch className="absolute text-slate-400 top-1/2 left-3 transform -translate-y-1/2" />
      </div>
              <button className="text-green-500 border rounded-lg py-2 px-4 flex flex-row items-center">
                <FaPlus></FaPlus>
                 <span>New</span>
              </button>
          </div>
        </div>
      </header>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-100 border-b text-start">
                Name
              </th>
              <th className="py-2 px-4 bg-gray-100 border-b">Email</th>
              <th className="py-2 px-4 bg-gray-100 border-b">Purchase Point</th>
              <th className="py-2 px-4 bg-gray-100 border-b text-end">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <div className="rounded-full w-8 h-8 bg-gray-300 mr-2"></div>
                    <div>
                      <Link to={`/customer/${customer.id}`} className="hover:text-green-500">
                        {customer.name}
                      </Link>
                      <br />
                      <span className="text-gray-500 text-sm">
                        {customer.gender}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-16 border-b text-center">
                  {customer.email}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {customer.purchasePoint}
                </td>
                <td className="py-2 px-4 border-b text-end">{customer.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerComponent;
