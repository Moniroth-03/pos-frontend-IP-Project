import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "@/app/auth/auth.slice";
import { AppDispatch } from "@/app/store";

const useLogin = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    const [user, setUser] = useState('chhit085@gmail.com')
    const [pwd, setPwd] = useState('123456')
    const [errMsg, setErrMsg] = useState('')
    
    useEffect(()=>{
        setErrMsg('');
    },[user, pwd]);

    const handleSubmit = async(e: Event) =>{
        e.preventDefault();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(login({ email:user, password: pwd })).then( (action: any) =>{
            if(action.payload === undefined || null){
                setErrMsg('server not found');
                return;
            }
            localStorage.setItem('user',JSON.stringify(action.payload));
            navigate('/dashboard');
        })
    } 

    const handleUserInput = (e: string) => setUser(e)
    const handlePwdInput = (e: string ) => setPwd(e)

    return {
        handlePwdInput,
        handleUserInput,
        handleSubmit,
        user, pwd, errMsg
    }
}

export default useLogin;