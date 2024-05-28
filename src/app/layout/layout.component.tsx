import { Outlet, useNavigate } from "react-router-dom";
import NavigationComponent from "./navigations/navigation.component";
import HeaderComponent from "./headers/header.component";
import { useLayoutEffect } from "react";

const LayoutComponent = () => {
  const navigate = useNavigate();
  
  useLayoutEffect(()=>{
    navigate('/dashboard');
  },[]);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <NavigationComponent></NavigationComponent>
      <Outlet></Outlet>
    </>
  )
}

export default LayoutComponent;