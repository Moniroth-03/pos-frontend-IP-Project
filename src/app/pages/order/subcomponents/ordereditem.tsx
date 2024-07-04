import env from "@/environments/environment";
import { Product } from "../order.type"
import AddToCart from "./addtocart";
import { useState } from "react";
import noimg from '@/assets/noimg.svg';

type props = {
    items: {
        product: Product;
        qty: number;
    }
    active: number;
}

const OrderItem = ({items,active}:props) => {
    const [img,setImg]= useState(env.img_url+items.product.image)

    function handleErrror(url: string){
        setImg(url);
    }
    return (
        <div className="w-full bg-white rounded-sm flex gap-2 pr-2">
            <img src={img} alt="no img" onError={()=>handleErrror(noimg)} 
                className="w-14 aspect-square object-contain h-full bg-gray-50 rounded-sm p-1"/>
            <div className="flex grow flex-col py-1 justify-between gap-2">
                <p className="text-sm">{items.product.name}</p>
                <p className="text-sm font-medium">${items.product.unit_price}</p>
            </div>
            <AddToCart product={items.product} id={active}/>
        </div>
    )
}

export default OrderItem