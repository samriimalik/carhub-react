import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home"; import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails"; import Booking from "./pages/Booking";
import Login from "./pages/Login"; import Dashboard from "./pages/Dashboard";
export default function App(){return <><Navbar/><Routes>
<Route path="/" element={<Home/>}/><Route path="/cars" element={<Cars/>}/>
<Route path="/cars/:id" element={<CarDetails/>}/><Route path="/login" element={<Login/>}/>
<Route path="/booking" element={<ProtectedRoute><Booking/></ProtectedRoute>}/>
<Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
<Route path="*" element={<main className="section"><h1>404</h1></main>}/>
</Routes></>}