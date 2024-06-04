import { AppDispatch } from "@/app/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "./inventory.service";

const useInventory = ()=>{
    const dispatch: AppDispatch = useDispatch();
    const [view,setView] = useState(false);
    const [edit,setEdit] = useState(false);
    const [del,setDel] = useState(false);

    useEffect(()=>{
        const fetch = () =>{
            dispatch(getProduct());
        };

        fetch();
    },[]);

    return {
        view, edit, del,
        setView, setEdit, setDel,
    }
}

export default useInventory;