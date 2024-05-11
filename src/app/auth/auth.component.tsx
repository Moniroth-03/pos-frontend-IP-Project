import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { selectToken } from "./auth.reducer";


const Authentication = () => {
  const token = useSelector(selectToken)
  const location = useLocation();
  return (
        token? <Outlet/>: <Navigate to="/login" state={{ from: location}} replace />
  )
}

export default Authentication;