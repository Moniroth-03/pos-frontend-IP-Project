
import { useEffect, useState } from "react";
import { AppDispatch } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../user.service";
import { selectUser } from "../user.slice";
import { useParams } from "react-router-dom";
import { user } from "../user.type";
import { FaArrowLeft } from "react-icons/fa6";
import { FormatDateTime } from "@/app/utils/dateTimeFormat";
import env from "@/environments/environment";
import noimg from '@/assets/noimg.svg';

const ViewUser = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  const { id } = useParams();

  const [data,setData] = useState<user | null>(null);
  const [img,setImg] = useState('');

  useEffect(()=>{
    const fetch = ()=>{
      dispatch(getUser());
      if(user && id){
        const userid = parseInt(id) - 1;
        setData(user.data[userid]);
        setImg(env.img_url + data?.avatar);
      }
    }
    
    fetch();
  },[id]);

  const handleBackClick = () => {
    window.history.back();
  };

  function handleErrror(url: string){
    setImg(url);
  }

  return (
    <section className="w-full px-2 flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center mb-6 relative">
        <div className="flex flex-row items-center gap-4">
          <button onClick={handleBackClick} className="font-semibold hover:bg-gray-100 p-2 cursor-pointer rounded-full">
            <FaArrowLeft/>
          </button>
          <span className="font-semibold text-sm">User</span>
        </div>

        <h1 className="font-bold text-xl absolute mb-2 left-1/2 -translate-x-1/2 top-2">Personal Information</h1>

      </div>


      <div className="flex flex-col gap-4 items-center mb-6">

        <img className="w-32 aspect-square ring-gray-200 ring-1 bg-gray-300 rounded-full mb-2" src={img} alt="no img" onError={()=>handleErrror(noimg)}/>
        <h2 className="font-semibold text-lg">{data?.name}</h2>




        <div className="flex gap-2 flex-row items-center space-x-24">
          <div className="flex flex-row items-center">
            <span>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none"  xmlns="http://www.w3.org/2000/svg" >
                <path  d="M17.5 19H7.5V5H17.5M17.5 1H7.5C6.39 1 5.5 1.89 5.5 3V21C5.5 21.5304 5.71071 22.0391 6.08579 22.4142C6.46086 22.7893 6.96957 23 7.5 23H17.5C18.0304 23 18.5391 22.7893 18.9142 22.4142C19.2893 22.0391 19.5 21.5304 19.5 21V3C19.5 2.46957 19.2893 1.96086 18.9142 1.58579C18.5391 1.21071 18.0304 1 17.5 1Z"
                  fill="#64748B"/>
              </svg>
            </span>

            <span>{data?.phone}</span>
          </div>




          <div className="flex gap-2 flex-row items-center">
            <span>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 20C3.95 20 3.47933 19.8043 3.088 19.413C2.69667 19.0217 2.50067 18.5507 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.48 4.19667 3.95067 4.00067 4.5 4H20.5C21.05 4 21.521 4.196 21.913 4.588C22.305 4.98 22.5007 5.45067 22.5 6V18C22.5 18.55 22.3043 19.021 21.913 19.413C21.5217 19.805 21.0507 20.0007 20.5 20H4.5ZM12.5 13L4.5 8V18H20.5V8L12.5 13ZM12.5 11L20.5 6H4.5L12.5 11ZM4.5 8V6V18V8Z"
                  fill="#64748B"/>
              </svg>
            </span>

            <span>{data?.email}</span>
          </div>



          <div className="flex gap-2 flex-row items-center">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 22C4.45 22 3.97933 21.8043 3.588 21.413C3.19667 21.0217 3.00067 20.5507 3 20V6C3 5.45 3.196 4.97933 3.588 4.588C3.98 4.19667 4.45067 4.00067 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.021 4.196 20.413 4.588C20.805 4.98 21.0007 5.45067 21 6V20C21 20.55 20.8043 21.021 20.413 21.413C20.0217 21.805 19.5507 22.0007 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM12 14C11.7167 14 11.4793 13.904 11.288 13.712C11.0967 13.52 11.0007 13.2827 11 13C10.9993 12.7173 11.0953 12.48 11.288 12.288C11.4807 12.096 11.718 12 12 12C12.282 12 12.5197 12.096 12.713 12.288C12.9063 12.48 13.002 12.7173 13 13C12.998 13.2827 12.902 13.5203 12.712 13.713C12.522 13.9057 12.2847 14.0013 12 14ZM8 14C7.71667 14 7.47933 13.904 7.288 13.712C7.09667 13.52 7.00067 13.2827 7 13C6.99933 12.7173 7.09533 12.48 7.288 12.288C7.48067 12.096 7.718 12 8 12C8.282 12 8.51967 12.096 8.713 12.288C8.90633 12.48 9.002 12.7173 9 13C8.998 13.2827 8.902 13.5203 8.712 13.713C8.522 13.9057 8.28467 14.0013 8 14ZM16 14C15.7167 14 15.4793 13.904 15.288 13.712C15.0967 13.52 15.0007 13.2827 15 13C14.9993 12.7173 15.0953 12.48 15.288 12.288C15.4807 12.096 15.718 12 16 12C16.282 12 16.5197 12.096 16.713 12.288C16.9063 12.48 17.002 12.7173 17 13C16.998 13.2827 16.902 13.5203 16.712 13.713C16.522 13.9057 16.2847 14.0013 16 14ZM12 18C11.7167 18 11.4793 17.904 11.288 17.712C11.0967 17.52 11.0007 17.2827 11 17C10.9993 16.7173 11.0953 16.48 11.288 16.288C11.4807 16.096 11.718 16 12 16C12.282 16 12.5197 16.096 12.713 16.288C12.9063 16.48 13.002 16.7173 13 17C12.998 17.2827 12.902 17.5203 12.712 17.713C12.522 17.9057 12.2847 18.0013 12 18ZM8 18C7.71667 18 7.47933 17.904 7.288 17.712C7.09667 17.52 7.00067 17.2827 7 17C6.99933 16.7173 7.09533 16.48 7.288 16.288C7.48067 16.096 7.718 16 8 16C8.282 16 8.51967 16.096 8.713 16.288C8.90633 16.48 9.002 16.7173 9 17C8.998 17.2827 8.902 17.5203 8.712 17.713C8.522 17.9057 8.28467 18.0013 8 18ZM16 18C15.7167 18 15.4793 17.904 15.288 17.712C15.0967 17.52 15.0007 17.2827 15 17C14.9993 16.7173 15.0953 16.48 15.288 16.288C15.4807 16.096 15.718 16 16 16C16.282 16 16.5197 16.096 16.713 16.288C16.9063 16.48 17.002 16.7173 17 17C16.998 17.2827 16.902 17.5203 16.712 17.713C16.522 17.9057 16.2847 18.0013 16 18Z" 
                fill="#64748B"/>
              </svg>
            </span>

            <span>{FormatDateTime(data?.created_at)}</span>
          </div>
          


        </div>
      </div>
    </section>
  )
}

export default ViewUser;