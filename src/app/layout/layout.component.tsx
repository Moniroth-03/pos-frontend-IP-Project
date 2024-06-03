import { Outlet } from "react-router-dom";
import NavigationComponent from "./navigations/navigation.component";
import HeaderComponent from "./headers/header.component";

const LayoutComponent = () => {

  return (
    <main>
      <HeaderComponent></HeaderComponent>
      <div className="flex">
        <NavigationComponent></NavigationComponent>
        <div className="flex w-full px-6 py-4 bg-gray-50">
          <Outlet></Outlet>
        </div>
      </div>
    </main>
  )
}

export default LayoutComponent;