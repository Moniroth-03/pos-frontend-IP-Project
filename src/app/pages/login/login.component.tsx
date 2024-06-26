import useLogin from './login.hook';

const LoginComponent = () => {
  const {
    handlePwdInput,
    handleUserInput,
    handleSubmit,
    user, pwd,
  }  = useLogin();

  return (
    <main className='w-screen h-screen bg-slate-950 flex'>
      <form className="py-32 px-12 flex w-[25%] bg-white flex-col gap-5 justify-center" onSubmit={(e)=>handleSubmit(e)}>
        <h1 className='text-4xl font-bold mb-4'>Login</h1>

        <label className='w-full flex flex-col gap-2' htmlFor='username'>
          Username
        <input name="username" className='bg-none border-2 py-1 rounded-lg px-1 border-gray-300 outline-none focus:border-gray-400' 
        onChange={(e)=>handleUserInput(e.target.value)} 
        value={user}
        autoComplete='off'
        /></label>
        
        <label className='w-full flex flex-col gap-2' htmlFor='password'>
          Password
          <input name='password' className='bg-none border-2 py-1 rounded-lg px-1 border-gray-300 outline-none focus:border-gray-400' 
          type='password' 
          onChange={(e)=>handlePwdInput(e.target.value)} 
          value={pwd}
          autoComplete='off'
          />
        </label>
        
        <button className='bg-emerald-500 mt-6 py-2 rounded-full text-white w-full' type='submit'>Login</button>
      </form>
      
      <div className='flex grow place-content-center items-center'>
        <span className='text-emerald-500 text-4xl font-semibold'>Mart <span className='text-white'>POS System</span></span>
      </div>
    </main>
  
  )
}

export default LoginComponent