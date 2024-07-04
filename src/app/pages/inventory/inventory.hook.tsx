import { AppDispatch } from "@/app/store";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "./inventory.service";
import { inventory } from "./inventory.type";
import { useSearchParams } from "react-router-dom";

const useInventory = ()=>{
    const dispatch: AppDispatch = useDispatch();
    const [view,setView] = useState(false);
    const [edit,setEdit] = useState(false);
    const [del,setDel] = useState(false);
    const [selectedItem,setItem] = useState<inventory | null>(null);

    //this is use to get the whole url of the browser
    const [queryParameters] = useSearchParams();


    
    const handleView = useCallback((s: boolean,item:inventory) => {
        setTimeout(() => {   
            setItem(item);
            setView(s)
        }, 200)
    }, []);
    const handleEdit = useCallback((s: boolean,item:inventory) => {
        setTimeout(() => {
            setItem(item);
            setEdit(s)
        }, 200)
    }, []);
    const handleDel = useCallback((s: boolean,item:inventory) => {
        setTimeout(() => {   
            setItem(item);
            setDel(s)
        }, 200)
    }, []);


    useEffect(()=>{
        const fetch = () =>{
            dispatch(getProduct({ 
                page: parseInt(queryParameters.get('page') || ''),
            }));
        };

        fetch();
    },[queryParameters]);

    return {
        view, edit, del, selectedItem,
        handleView,handleEdit,handleDel,
        setView,setEdit,setDel
    }
}

export default useInventory;