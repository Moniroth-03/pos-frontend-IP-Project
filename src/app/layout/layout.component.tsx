import { Outlet } from "react-router-dom";
import NavigationComponent from "./navigations/navigation.component";
import HeaderComponent from "./headers/header.component";
import { Toaster } from "sonner";

const LayoutComponent = () => {

  return (
    <main className="h-screen overflow-hidden relative">
      <HeaderComponent></HeaderComponent>
      <div className="flex">
        <NavigationComponent></NavigationComponent>
        <div className="flex w-full px-6 py-4 bg-gray-50">

          <Outlet></Outlet>
        
        </div>
      </div>

      {/* this is for alert */}
      <Toaster richColors/>
    </main>
  )
}

export default LayoutComponent;