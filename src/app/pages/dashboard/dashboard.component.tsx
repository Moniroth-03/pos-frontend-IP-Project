import axiosPrivate from "@/app/api";
import ListDashboardComponent from "./dashboard.list/dashboard.list.component";
import { useState, useEffect } from "react";

const DashboardComponent = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: statistic } = await axiosPrivate.get("dasboard"); // Correct endpoint
        setData(statistic);
        console.log(statistic); // Log the fetched data
      } catch (err) {
        console.error(err); // Use console.error for errors
      }
    };

    fetchData();
  }, []); // Dependency array is empty to run only once after the component mounts

  const [datathismonth, setDatathismonth] = useState({});
  useEffect(() => {
    const fetchDataThismonth = async () => {
      try {
        const { data: statistic } = await axiosPrivate.get(
          "dasboard/thisMonth"
        ); // Correct endpoint
        setDatathismonth(statistic);
        console.log(datathismonth); // Log the fetched data
      } catch (err) {
        console.error(err); // Use console.error for errors
      }
    };

    fetchDataThismonth();
  }, []); // Dependency array is empty to run only once after the component mounts

  const [datalastmonth, setLastmonth] = useState({});
  useEffect(() => {
    const fetchDatalastmonth = async () => {
      try {
        const { data: statistic } = await axiosPrivate.get(
          "dasboard/lastMonth"
        ); // Correct endpoint
        setDatathismonth(statistic);
        console.log(datalastmonth); // Log the fetched data
      } catch (err) {
        console.error(err); // Use console.error for errors
      }
    };

    fetchDatalastmonth();
  }, []); // Dependency array is empty to run only once after the component mounts

  const [datatoday, setDataToday] = useState({});
  useEffect(() => {
    const fetchDataToday = async () => {
      try {
        const { data: statistic } = await axiosPrivate.get(
          "dasboard/lastMonth"
        ); // Correct endpoint
        setDataToday(statistic);
        console.log(datatoday); // Log the fetched data
      } catch (err) {
        console.error(err); // Use console.error for errors
      }
    };

    fetchDataToday();
  }, []);

  return (
    <div
      className="w-full p-4 overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 100px)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:col-span-3">
          <ListDashboardComponent
            title="Sales Today"
            sale={datatoday?.total_sale}
            customer={datatoday?.CustomersCount}
            order={datatoday?.Sale} // Provide a fallback value
          />
          {data?.sale}
        </div>
        <ListDashboardComponent
          title="Sales This Month"
          sale={datathismonth?.total_sale}
          customer={datathismonth?.CustomersCount}
          order={datathismonth?.Sale}
        />
        <ListDashboardComponent
          title="Sales Last Month"
          sale={datathismonth?.total_sale}
          customer={datathismonth?.CustomersCount}
          order={datathismonth?.Sale}
        />
        <div className="lg:col-span-3">
          <ListDashboardComponent
            title="All Sales"
            sale={data?.total_sale}
            customer={data?.CustomersCount}
            order={data?.Sale}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
