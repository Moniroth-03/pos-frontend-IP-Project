import { useEffect, useState } from "react";

const HeaderComponent = () => {

  const [profile,setProfile] = useState();
  
  useEffect(()=>{
    
  },[])
  

  return (
    <div className="flex flex-row justify-between px-2 py-1 items-center border">
      <div className="flex flex-row gap-20">
        <div className="font-bold text-xl">POS System</div>
        <div className="font-bold text-lg">Admin</div>
      </div>

      <div className="flex flex-row pr-8">
        
        <div className="w-10 h-10 rounded-full border bg-white flex items-center justify-center">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
