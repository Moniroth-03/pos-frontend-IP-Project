import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/app/auth/auth.reducer";
import { useLoginMutation } from '@/app/auth/authApi.slice.js'

const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [user, setUser] = useState('chhit085@gmail.com')
    const [pwd, setPwd] = useState('123456')
    const [errMsg, setErrMsg] = useState('')
    const [login, {isLoading}] = useLoginMutation();
    
    useEffect(()=>{
        setErrMsg('');
    },[user, pwd]);

    const handleSubmit = async(e: Event) =>{
        e.preventDefault();

        try {
            const userData = await login({user,pwd}).unwrap();
            dispatch(setCredentials({...userData}));
            setUser('');
            setPwd('');
            navigate('/dashboard');
        }catch(err: any){
            if(!err?.response){
                setErrMsg('no server response')
            }else if(err.response?.status === 400){
                setErrMsg('missing usernaem or password');
            }else if(err.response?.status === 401){
                setErrMsg('not authorized')
            }else{
                setErrMsg('login failed')
            }
        }
    } 

    const handleUserInput = (e: Event ) => setUser(e.target?.value )
    const handlePwdInput = (e: Event ) => setPwd(e.target?.value)

    return {
        handlePwdInput,
        handleUserInput,
        handleSubmit,
        user, pwd, errMsg, login, isLoading, setErrMsg
        
    }
}

export default useLogin;