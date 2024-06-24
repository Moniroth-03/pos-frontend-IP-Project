/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from "@/app/store"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getCategory, getProductByType } from "./order.service";

const useOrder = () => {
    const dispatch:AppDispatch = useDispatch();
    const [active,setActive] = useState("0");

    useEffect(()=>{
        const fetchCategory = ()=>{
            dispatch(getCategory());
        }

        fetchCategory();
    },[])

    const onTabChange = (id: number)=> {
        if(id == 0){
            setActive("0");
            return;
        }
        setActive(id.toString())
        dispatch(getProductByType(id));
    }

    

    return {
        onTabChange,active,setActive
    }
}

export default useOrder