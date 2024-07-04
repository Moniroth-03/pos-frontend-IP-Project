import axiosPrivate from "@/app/api";
import env from "@/environments/environment";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface Profile {
  status: boolean;
  message: string;
  data: {
    id: number;
    users_type: number;
    name: string;
    avatar: string;
    phone: string;
    email: string;
    loyalty_points: number;
    is_active: number;
    email_verified_at: Date;
    created_at: Date;
    updated_at: Date;
  }
}


const HeaderComponent = () => {

  const [profile,setProfile] = useState<Profile>();
  
  useEffect(()=>{
    const fetch = async () =>{
      axiosPrivate.get(env.api_url + '/profile').then(
        (res)=>{
          setProfile(res.data);
        }
      ).catch((err)=>{
        toast.error('something went wrong')
      });
    }

    fetch();

  },[])
  

  return (
    <div className="flex flex-row justify-between px-2 py-1 items-center border">
      <div className="flex flex-row gap-20">
        <div className="font-bold text-xl">POS System</div>
        <div className="font-bold text-lg">Admin</div>
      </div>

      <div className="flex flex-row pr-8">
        
        <div className="w-10 h-10 rounded-full border bg-white flex items-center justify-center">
          {profile && <img src={env.img_url + profile?.data.avatar} alt="" />}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
