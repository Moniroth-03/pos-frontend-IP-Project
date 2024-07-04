import { AppDispatch } from "@/app/store";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { user } from "../user/user.type";
import { getCustomer } from "../user/user.service";

const useUser = ()=>{
    const dispatch: AppDispatch = useDispatch();
    const [edit,setEdit] = useState(false);
    const [del,setDel] = useState(false);
    const [selectedItem,setItem] = useState<user | null>(null);

    const handleEdit = useCallback((s: boolean,item:user) => {
        setTimeout(() => {
            setItem(item);
            setEdit(s)
        }, 300);
    }, []);
    const handleDel = useCallback((s: boolean,item:user) => {
        setTimeout(() => {
            setItem(item);
            setDel(s)
        }, 300);
    }, []);


    useEffect(()=>{
        const fetch = () =>{
            dispatch(getCustomer());
        };

        fetch();
    },[]);

    return {
        edit, del, selectedItem,
        handleEdit,handleDel,setEdit,setDel
    }
}

export default useUser;