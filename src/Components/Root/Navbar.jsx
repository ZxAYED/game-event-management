import { NavLink } from "react-router-dom";
import img from '../../images/FAV.png'

const Navbar = () => {
    const Navmenu=<>
    <div className="flex flex-row gap-4  text-xl">
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/Services'>Services</NavLink></li>
    <li><NavLink to='/News'>News</NavLink></li>
    <li><NavLink to='/SignIn'>Log In</NavLink></li>
    <li><NavLink to='/Register'>Register</NavLink></li>
    
    </div>
    </>
    return (
        <div>
            <div className="navbar mt-0 h-24  bg-[#120F1F] mb-12 md:mb-0" >
  <div className="navbar-start xl:p-24 mx-auto  ">
    
    <div className="dropdown  ">
        
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm bg-[#120F1F] flex flex-col dropdown-content mt-3 z-[1] p-2 shadow  rounded-box  px-7">
        {Navmenu}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl text-[#BE006B] text-extrabold">ZxAYED</a>
  </div>
  <div className="navbar-center hidden lg:flex   ">
    <ul className="menu menu-horizontal px-1">
    
      {Navmenu}
     
    </ul>
  </div>
  <div className="navbar-end justify-center ">
  <div className="w-10 rounded-full ">
          <img src={img} />
        </div>
    <a className="btn border text-[#000000] bg-[#BE006B]  hover:border-purple-600  hover:bg-slate-700 rounded-md ml-4">Login</a>
  
  </div>
</div>
        </div>
    );
};

export default Navbar;