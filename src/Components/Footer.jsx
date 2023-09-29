import logo from "../Pictures/logo.png";

const Footer = () => {
  return (
    <footer class="w-screen md:h-[6.7vh] h-[9.7vh] bg-[#1E1A1A]">
      <div class="md:pl-[8.3vw] md:py-[1.6vh] px-[24vw] py-[2.4vh]">
        <p class="text-white w-fit flex gap-2 md:text-base text-2xl font-Ubuntu">
          Mufasa
          <img src={logo} class="md:w-[1.5vw]" />
          <span class="w-fit text-[#3577F6]">Travel</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
