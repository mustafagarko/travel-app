import logo from "../Pictures/logo.png";

const Footer = () => {
  return (
    <footer className="w-screen h-[80px] flex items-center md:justify-normal pl-0 md:pl-[8.3vw] justify-center  bg-[#1E1A1A]">
      <div className="">
        <p className="text-white w-fit flex gap-2 md:text-base text-2xl font-Ubuntu">
          Mufasa
          <img src={logo} className="object-cover w-[30px]" />
          <span className="w-fit text-[#3577F6]">Travel</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
