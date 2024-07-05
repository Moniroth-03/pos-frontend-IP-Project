import axiosPrivate from "@/app/api";
import env from "@/environments/environment";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import userimg from '@/assets/user.svg';
import { Button } from "@/components/ui/button";

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
  
  const [img,setImg]= useState('')

  useEffect(()=>{
    const fetch = async () =>{
      axiosPrivate.get(env.api_url + '/profile').then(
        (res)=>{
          setProfile(res.data);
          setImg(env.img_url + profile?.data.avatar)
        }
      ).catch((err)=>{
        toast.error('something went wrong')
      });
    }

    fetch();

  },[])

  function handleErrror(url: string){
      setImg(url);
  }

  async function handleLogout(){
    axiosPrivate.get(env.api_url+'/logout').then(
      res => {
        localStorage.removeItem('user');
        window.location.reload(); 
      }
    )
  }

  return (
    <div className="flex flex-row justify-between px-2 py-1 items-center border">
      <div className="flex flex-row gap-20">
        <div className="font-bold text-xl">POS System</div>
        <div className="font-bold text-lg">Admin</div>
      </div>

      <div className="flex flex-row pr-8">
        
        <div className="flex items-center justify-center">
          {profile && <img src={img} alt="omg" onError={()=>handleErrror(userimg)} 
            className="w-10 h-10 rounded-full border bg-white"/>}
          <Button variant="link" onClick={()=>handleLogout()}>Logout</Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
