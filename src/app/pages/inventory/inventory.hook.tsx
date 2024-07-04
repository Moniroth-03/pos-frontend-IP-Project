import { AppDispatch } from "@/app/store";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "./inventory.service";
import { inventory } from "./inventory.type";

const useInventory = ()=>{
    const dispatch: AppDispatch = useDispatch();
    const [view,setView] = useState(false);
    const [edit,setEdit] = useState(false);
    const [del,setDel] = useState(false);
    const [selectedItem,setItem] = useState<inventory | null>(null);

    const handleView = useCallback((s: boolean,item:inventory) => {
        setTimeout(() => {   
            setItem(item);
            setView(s)
        }, 100)
    }, []);
    const handleEdit = useCallback((s: boolean,item:inventory) => {
        setTimeout(() => {
            setItem(item);
            setEdit(s)
        }, 100)
    }, []);
    const handleDel = useCallback((s: boolean,item:inventory) => {
        setTimeout(() => {   
            setItem(item);
            setDel(s)
        }, 100)
    }, []);


    useEffect(()=>{
        const fetch = () =>{
            dispatch(getProduct());
        };

        fetch();
    },[]);

    return {
        view, edit, del, selectedItem,
        handleView,handleEdit,handleDel,
        setView,setEdit,setDel
    }
}

export default useInventory;