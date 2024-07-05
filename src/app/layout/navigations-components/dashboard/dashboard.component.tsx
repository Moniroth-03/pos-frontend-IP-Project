import {
  FaDollarSign,
  FaUsers,
  FaReceipt,
  FaChartLine,
  FaShippingFast,
  FaClipboardList,
  FaMoneyBillWave,
  FaWarehouse,
  FaComments,
} from "react-icons/fa";

const DashboardComponent = () => {
  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold">Summary</h2>
        <span className="text-xs sm:text-sm text-gray-500">30 days</span>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-teal-100 text-teal-600 rounded-lg">
            <FaDollarSign size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Sales</div>
            <div className="text-xl sm:text-2xl font-bold">$12,300</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-yellow-100 text-yellow-600 rounded-lg">
            <FaUsers size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Customers</div>
            <div className="text-xl sm:text-2xl font-bold">120</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-pink-100 text-pink-600 rounded-lg">
            <FaReceipt size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Orders</div>
            <div className="text-xl sm:text-2xl font-bold">125</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-blue-100 text-blue-600 rounded-lg">
            <FaChartLine size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Growth</div>
            <div className="text-xl sm:text-2xl font-bold">15%</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-green-100 text-green-600 rounded-lg">
            <FaShippingFast size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Shipments</div>
            <div className="text-xl sm:text-2xl font-bold">98</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-red-100 text-red-600 rounded-lg">
            <FaClipboardList size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Tasks</div>
            <div className="text-xl sm:text-2xl font-bold">45</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-purple-100 text-purple-600 rounded-lg">
            <FaMoneyBillWave size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Revenue</div>
            <div className="text-xl sm:text-2xl font-bold">$23,450</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-orange-100 text-orange-600 rounded-lg">
            <FaWarehouse size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Inventory</div>
            <div className="text-xl sm:text-2xl font-bold">200</div>
          </div>
        </div>
        <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="p-3 mr-4 bg-indigo-100 text-indigo-600 rounded-lg">
            <FaComments size={24} />
          </div>
          <div>
            <div className="text-sm text-gray-600">Feedback</div>
            <div className="text-xl sm:text-2xl font-bold">89</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
