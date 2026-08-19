import {Car,Home,LayoutDashboard,LogIn,CalendarCheck} from "lucide-react";
import {NavLink,Link} from "react-router-dom";
export default function Navbar(){const c=({isActive})=>isActive?"nav-link active":"nav-link";return <header className="navbar"><div className="nav-inner">
<Link className="brand" to="/"><span className="brand-icon"><Car size={22}/></span>CarHub</Link>
<nav className="nav-links"><NavLink className={c} to="/"><Home size={17}/>Home</NavLink><NavLink className={c} to="/cars"><Car size={17}/>Cars</NavLink><NavLink className={c} to="/booking"><CalendarCheck size={17}/>Book</NavLink><NavLink className={c} to="/dashboard"><LayoutDashboard size={17}/>Dashboard</NavLink></nav>
<Link className="login-nav" to="/login"><LogIn size={17}/>Login</Link></div></header>}