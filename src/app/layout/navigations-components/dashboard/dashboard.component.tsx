import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axiosPrivate from "@/app/api";

const DashboardComponent = () => {
  const [data, setdata] = useState();
  useEffect(() => {
    const fethdata = async () => {
      try {
        const { data: statistic } = await axiosPrivate.get("dasboard");
        setdata(statistic);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fethdata();
  }, []);

  return (
    <div className="grid grid-cols-3 w-full gap-5 h-[250px]">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      {data?.total_sale}
    </div>
  );
};

export default DashboardComponent;
