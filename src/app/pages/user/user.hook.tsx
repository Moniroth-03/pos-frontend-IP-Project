import { AppDispatch } from "@/app/store";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { user } from "./user.type";
import { getUser } from "./user.service";

const useUser = ()=>{
    const dispatch: AppDispatch = useDispatch();
    const [view,setView] = useState(false);
    const [edit,setEdit] = useState(false);
    const [del,setDel] = useState(false);
    const [selectedItem,setItem] = useState<user | null>(null);

    const handleView = useCallback((s: boolean,item:user) => {
        setItem(item);
        setView(s)
    }, []);
    const handleEdit = useCallback((s: boolean,item:user) => {
        setItem(item);
        setEdit(s)
    }, []);
    const handleDel = useCallback((s: boolean,item:user) => {
        setItem(item);
        setDel(s)
    }, []);


    useEffect(()=>{
        const fetch = () =>{
            dispatch(getUser());
        };

        fetch();
    },[]);

    return {
        view, edit, del, selectedItem,
        handleView,handleEdit,handleDel,
        setView,setEdit,setDel
    }
}

export default useUser;