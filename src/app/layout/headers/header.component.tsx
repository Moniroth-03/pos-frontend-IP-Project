import { FaCog } from 'react-icons/fa';
const HeaderComponent = () => {
  return (
    <div className="flex flex-row justify-between items-center px-6">
      <div className="flex flex-row gap-16 items-center">
        <h1 className="font-bold text-lg">POS System</h1>
        <h2 className="font-bold text-lg">Admin</h2>
      </div>

      <div className="flex flex-row gap-5">
        <div className="w-12 h-12 rounded-full border bg-white flex items-center justify-center">
          <FaCog> </FaCog>
        </div>
        <div className="w-12 h-12 rounded-full border bg-white flex items-center justify-center">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
