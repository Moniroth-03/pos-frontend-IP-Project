import axiosPrivate from "@/app/api";
import env from "@/environments/environment";
import { useEffect, useState } from "react";
import { Sale } from "./order_detail.type";
import { FaArrowLeft } from "react-icons/fa6";
import LoadingSpinner from "@/app/layout/loading/loading";
import { useParams } from "react-router-dom";
import { FormatDateTime } from "@/app/utils/dateTimeFormat";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const ViewOrderDetail = () => {

    const [data,setData] = useState<Sale | null>(null)
    const { id } = useParams();

    const handleBackClick = () => {
        window.history.back();
    };



    useEffect(()=>{
        const fetch = async()=>{
            axiosPrivate.get(`${env.api_url}/sale/view?id=${id}`).then(
                res => {
                    setData(res.data);
                }
            )
        }
        
        
        fetch();
    },[]);

    return (
    <>
        {!data? <div className="w-full flex justify-center"><LoadingSpinner/></div> :
        <section className="w-full px-2 flex flex-col gap-4 overflow-auto">
            <div className="flex flex-row justify-between items-center mb-6 relative">
                <div className="flex flex-row items-center gap-4">
                <button onClick={handleBackClick} className="font-semibold hover:bg-gray-100 p-2 cursor-pointer rounded-full">
                    <FaArrowLeft/>
                </button>
                <span className="font-semibold text-sm">Order Detail</span>
                </div>

                <h1 className="font-bold text-xl absolute mb-2 left-1/2 -translate-x-1/2 top-2">Order Information</h1>

            </div>




            {/* body */}
            <div>
                <div className="py-4 px-5 flex-col flex gap-8 rounded-lg w-full ring-2 ring-gray-200">
                    <span className="font-medium text-2xl">Order#{data?.id}</span>
                    
                    <div className="flex gap-10 flex-wrap">
                        <span className="bg-slate-200 rounded-lg px-2 py-3">Order on: <span className="text-sm ml-2 text-gray-600">{FormatDateTime(data?.ordered_at)}</span></span>
                        <span className="bg-slate-200 rounded-lg px-2 py-3">Cashier Name: <span className="text-sm ml-2 text-gray-600">{data?.cashier.name}</span></span>
                        <span className="bg-slate-200 rounded-lg px-2 py-3">Total Cost: <span className="text-sm ml-2 text-gray-600">${data?.total_price}</span></span>
                        <span className="bg-slate-200 rounded-lg px-2 py-3">Reciept Number: <span className="text-sm ml-2 text-gray-600">{data?.receipt_number}</span></span>
                    </div>

                </div>

                <div className="mt-8">
                    <span className="font-medium text-2xl">Cart detail</span>
                    <ul className="grid grid-cols-5 gap-5 mt-8">
                        {
                            data?.details.map((item,i)=>(
                                <li className="w-full aspect-square" key={item.id}>
                                    <Card className="h-full">
                                        <CardHeader>
                                            <CardTitle>{item.product.name}</CardTitle>
                                            <CardDescription>
                                                <img src={env.img_url+item.product.image} alt={item.product.name} className="w-full h-16 object-contain" />
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p>Quantity: {item.qty}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <p>Unit Price: ${item.unit_price.toFixed(2)}</p>
                                        </CardFooter>
                                    </Card>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>

        </section>
        }
    </>
    )
}

export default ViewOrderDetail;