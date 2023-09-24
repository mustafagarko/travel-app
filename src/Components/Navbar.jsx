import logo from "../Pictures/logo.png";

export default function Navbar() {
  return (
    <nav className=" fixed top-0 left-0 w-screen h-[15vh] bg-black z-10  bg-opacity-50 px-[7vw] flex justify-between items-center">
      <img
        src={logo}
        className="object-cover w-[50px] h-[50px] cursor-pointer"
      ></img>
      <ul className="text-white flex w-[30%] justify-between ">
        <li className="hover:opacity-50">
          <a href="#">Destinations</a>
        </li>
        <li className="hover:opacity-50">
          <a href="#">About us</a>
        </li>
        <li className="hover:opacity-50">
          <a href="#">Contact us</a>
        </li>
      </ul>
    </nav>
  );
}
