import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/app/auth/auth.reducer";
import { useLoginMutation } from '@/app/auth/authApi.slice.js'

const LoginComponent = () => {

  const errRef = useRef<undefined | any>('');
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, {isLoading}] = useLoginMutation();

  useEffect(()=>{
    setErrMsg('');
  },[user,pwd]);

  const handleSubmit = async(e: Event) =>{
    e.preventDefault();

    try{
      const userData = await login({user,pwd}).unwrap()
      dispatch(setCredentials({...userData,user}));
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

      errRef.current.focus();
    }
  } 

  const handleUserInput = (e: Event ) => setUser(e.target.value)
  const handlePwdInput = (e: Event ) => setPwd(e.target.value)

  return (
    <>
      <form className="bg-slate-600 p-4 flex gap-10" onSubmit={()=>handleSubmit}>
        <input onChange={()=>handleUserInput} value={user}/>
        <input onChange={()=>handlePwdInput} value={pwd}/>
      </form>
    </>
  
  )
}

export default LoginComponent