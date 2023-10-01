import { Link } from "react-router-dom";
import logo from "../Pictures/logo.png";

export default function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 w-screen h-[15vh] bg-black z-10  bg-opacity-50 px-[7vw] flex justify-between items-center">
      <Link to="/">
        <img
          src={logo}
          className="object-cover w-[50px] h-[50px] cursor-pointer"
        ></img>
      </Link>
      <ul className="text-white flex gap-10 ">
        <li className="hover:opacity-50">
          <Link to="/destinations">Destinations</Link>
        </li>
        <li className="hover:opacity-50">
          <Link to="/about">About Us</Link>
        </li>
        <li className="hover:opacity-50">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="hover:opacity-50">
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </nav>
  );
}
