<<<<<<< HEAD
import { FaCog } from "react-icons/fa";
const HeaderComponent = () => {
  return (
    <div className="flex flex-row justify-between px-2 py-1 items-center border">
      <div className="flex flex-row gap-20">
        <div className="font-bold text-xl">POS System</div>
        <div className="font-bold text-lg">Admin</div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="w-10 h-10 rounded-full border bg-white flex items-center justify-center">
          <FaCog></FaCog>
        </div>
        <div className="w-10 h-10 rounded-full border bg-white flex items-center justify-center">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

=======
const HeaderComponent = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center px-4 pr-4 py-4">
      <div className="flex flex-col items-center sm:items-center">
        <h1 className="font-bold text-xl">POS System</h1>
        <div className="text-center sm:text-left">Admin</div>
      </div>
      <div className="relative w-full sm:w-auto sm:order-2 mt-2 sm:mt-0">
        <input
          className="w-full sm:w-[30rem] lg:w-[50rem] appearance-none border-2 border-gray-300 rounded-md py-2 px-3 text-gray-800 pl-10"
          type="text"
          placeholder="Search, Menu, Order and More..."
        />
        <div className="absolute left-3 bottom-3">
          <svg
            className="h-4 w-4 text-gray-500"
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_217_28)">
              <path
                d="M15.7812 13.8344L12.6656 10.7188C12.525 10.5781 12.3344 10.5 12.1344 10.5H11.625C12.4875 9.39688 13 8.00937 13 6.5C13 2.90937 10.0906 0 6.5 0C2.90937 0 0 2.90937 0 6.5C0 10.0906 2.90937 13 6.5 13C8.00937 13 9.39687 12.4875 10.5 11.625V12.1344C10.5 12.3344 10.5781 12.525 10.7187 12.6656L13.8344 15.7812C14.1281 16.075 14.6031 16.075 14.8937 15.7812L15.7781 14.8969C16.0719 14.6031 16.0719 14.1281 15.7812 13.8344ZM6.5 10.5C4.29062 10.5 2.5 8.7125 2.5 6.5C2.5 4.29063 4.2875 2.5 6.5 2.5C8.70937 2.5 10.5 4.2875 10.5 6.5C10.5 8.70938 8.7125 10.5 6.5 10.5Z"
                fill="#9CA3AF"
              />
            </g>
            <defs>
              <clipPath id="clip0_217_28">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex flex-row gap-5 sm:order-3 mt-2 sm:mt-0">
        <div className="w-12 h-12 rounded-full border bg-white flex items-center justify-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_217_24)">
              <path
                d="M15.2312 9.86561L13.9 9.09686C14.0344 8.37186 14.0344 7.62811 13.9 6.90311L15.2312 6.13436C15.3844 6.04686 15.4531 5.86561 15.4031 5.69686C15.0562 4.58436 14.4656 3.57811 13.6937 2.74061C13.575 2.61249 13.3812 2.58124 13.2312 2.66874L11.9 3.43749C11.3406 2.95624 10.6969 2.58436 9.99999 2.34061V0.806236C9.99999 0.631236 9.87811 0.478112 9.70624 0.440612C8.55936 0.184362 7.38437 0.196862 6.29374 0.440612C6.12186 0.478112 5.99999 0.631236 5.99999 0.806236V2.34374C5.30624 2.59061 4.66249 2.96249 4.09999 3.44061L2.77186 2.67186C2.61874 2.58436 2.42811 2.61249 2.30936 2.74374C1.53749 3.57811 0.946865 4.58436 0.59999 5.69999C0.546865 5.86874 0.61874 6.04999 0.771865 6.13749L2.10311 6.90624C1.96874 7.63124 1.96874 8.37499 2.10311 9.09999L0.771865 9.86874C0.61874 9.95624 0.54999 10.1375 0.59999 10.3062C0.946865 11.4187 1.53749 12.425 2.30936 13.2625C2.42811 13.3906 2.62186 13.4219 2.77186 13.3344L4.10311 12.5656C4.66249 13.0469 5.30624 13.4187 6.00312 13.6625V15.2C6.00312 15.375 6.12499 15.5281 6.29686 15.5656C7.44374 15.8219 8.61874 15.8094 9.70936 15.5656C9.88124 15.5281 10.0031 15.375 10.0031 15.2V13.6625C10.6969 13.4156 11.3406 13.0437 11.9031 12.5656L13.2344 13.3344C13.3875 13.4219 13.5781 13.3937 13.6969 13.2625C14.4687 12.4281 15.0594 11.4219 15.4062 10.3062C15.4531 10.1344 15.3844 9.95311 15.2312 9.86561ZM7.99999 10.5C6.62187 10.5 5.49999 9.37811 5.49999 7.99999C5.49999 6.62186 6.62187 5.49999 7.99999 5.49999C9.37811 5.49999 10.5 6.62186 10.5 7.99999C10.5 9.37811 9.37811 10.5 7.99999 10.5Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_217_24">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="w-12 h-12 rounded-full border bg-white flex items-center justify-center">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

>>>>>>> ed295a4935753f31ea9a012480605ef76d917884
export default HeaderComponent;
