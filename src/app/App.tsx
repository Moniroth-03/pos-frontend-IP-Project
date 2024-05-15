import { Route, Routes } from 'react-router-dom'
import LayoutComponent from './layout/layout.component'
import './App.css'
import Authentication from './auth/auth.component';
import LoginComponent from './pages/login/login.component';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Authentication/>}>
        <Route path='/' element={<LayoutComponent/>}>
          <Route path="/" element={<div>hi</div>} />

          <Route path="*" element={<div>notfound</div>} />
        </Route>
      </Route>

      <Route path='/login' element={<LoginComponent/>} />
    </Routes>
  )
}

export default App;
