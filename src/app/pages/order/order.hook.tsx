/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from "@/app/store"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getCategory, getProductByType } from "./order.service";
import { Cart } from "./order.type";

const useOrder = () => {
    const dispatch:AppDispatch = useDispatch();
    const [active,setActive] = useState("1");

    useEffect(()=>{
        const fetchCategory = ()=>{
            dispatch(getCategory());
        }
        const fetchProduct = ()=> { 
            dispatch(getProductByType(1));
        }

        fetchCategory();
        fetchProduct();
    },[])

    const onTabChange = (id: number)=> {
        setActive(id.toString())
        dispatch(getProductByType(id));
    }

    const getCartTotalItem = (array:Cart | null) =>{
        if( array == null || array.length == 0 ) return;
        let total = 0;
        for(const i of array){
            total = total + i.qty;
        }
        return total;
    }

    const getCartTotalItemCost = (array:Cart | null) =>{
        if( array == null || array.length == 0 ) return;
        let total = 0;
        for(const i of array){
            total = total + (i.qty * i.product.unit_price);
        }
        return total;
    }

    return {
        onTabChange,active,setActive,getCartTotalItem,getCartTotalItemCost
    }
}

export default useOrder