import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import logo from "../assest/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi"; 
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import "../Styles/Header.css"

const Header = () => {

  const navigate = useNavigate();

  const productData = useSelector((state) => state.product.productList);

  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const handleLogout = () => {
    localStorage.removeItem("logedin");
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  const cartItemNumber = useSelector((state)=>state.product.cartItem)
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 main">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10 flex">
            <img src="https://www.pngkit.com/png/full/364-3642224_clarity-ecommerce-logo-logo-e-commerce-png.png" className="h-full"  style={{borderRadius: "10px"}}/>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex navtext">
            <Link className="link" to={""}>Home</Link>
            <Link className="link" to={`menu/${localStorage.getItem("productid")?localStorage.getItem("productid"):"6478a135d4cedfb53cfc56f9"}`}>Menu</Link>
            {/* <Link className="link" to={"about"}>About</Link>
            <Link className="link" to={"contact"}>Contact</Link> */}
          </nav>
          <div className="visible">
          {userData.image ? (
                  <p 
                    className="cursor-pointer font-semibold px-2 text-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName+" "+userData.lastName}){" "}
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2 text-red-600 font-semibold"
                  >
                    Login
                  </Link>
                )}
                </div>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}>
              <BsCartFill color="blue" />
              <div className="absolute -top-1 -right-1 text-white bg-pink-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="logout absolute right-2 bg-white py-2  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link style={{marginBottom: "5px"}}
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    New product
                  </Link>
                 )} 

                {userData.image ? (
                  <p style={{marginBottom: "5px"}}
                    className="cursor-pointer text-white px-2 bg-orange-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName}){" "}
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link onClick={()=>{if(!localStorage.getItem("productid")){alert("Select")}}}
                    to={`menu/6478a135d4cedfb53cfc56f9`}
                    className="px-2 py-1"
                  >
                    Menu
                  </Link>
                  {/* <Link to={"about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="px-2 py-1">
                    Contact
                  </Link> */}
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
