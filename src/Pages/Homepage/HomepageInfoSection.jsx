import valuePic from "../../Pictures/value.png";
import luxuryPic from "../../Pictures/luxury.png";
import guidancePic from "../../Pictures/guidance.png";

export default function HomepageInfoSection() {
  return (
    <section className="md:px-[8.3vw] px-[4.2vw] w-screen md:h-[70vh] h-[141vh] bg-white flex md:py-[13vh] py-[9.5vh]">
      <div className="flex md:justify-normal md:flex-row flex-col justify-between gap-[2.6vw] md:w-[83vw] md:h-[44vh] md:py-[7.3vh]">
        <div className="flex justify-between md:w-[26vw] w-[91.5vw] h-[30vh]">
          <div className="flex flex-col gap-[2.5vh] md:w-[26vw] w-[91.5vw]">
            <img src={valuePic} className="md:w-[4vw] w-[13.3vw] h-[8vh]" />
            <p className="w-full text-2xl font-medium">
              Value and <br />
              <span className="text-[#3577F6] w-full text-2xl">Ease</span>
            </p>
            <p className="w-full text-[#625D5D] md:pr-[4vw] font-thin">
              We secure exclusive deals, making your travel affordable and
              hassle-free. Leave the details to us; your dream vacation awaits.
            </p>
          </div>
          <div className="md:flex hidden w-px bg-[#F2F2F2] h-[44.3vh] -translate-y-[7.3vh]"></div>
        </div>
        <div className="h-px w-full bg-[#F2F2F2] md:hidden"></div>
        <div className="flex justify-between md:w-[26vw] w-[91.5vw] h-[30vh]">
          <div className="flex flex-col gap-[2.5vh] md:w-[26vw] w-[91.5vw]">
            <img src={guidancePic} className="md:w-[4vw] w-[13.3vw] h-[8vh]" />
            <p className="w-full text-2xl">
              Expert <br />
              <span className="text-[#3577F6] w-full text-2xl">Guidance</span>
            </p>
            <p className="w-full text-[#625D5D] font-thin md:pr-[1vw]">
              At Mufasa Travel, our experienced team crafts personalized
              journeys, ensuring every adventure is unique and memorable.
            </p>
          </div>
          <div className="w-px md:visible invisible bg-[#F2F2F2] h-[44.3vh] -translate-y-[7.3vh]"></div>
        </div>
        <div className="h-px w-full bg-[#F2F2F2] md:hidden"></div>
        <div className="flex flex-col gap-[2.5vh] md:w-[26vw] w-[91.5vw] h-[30vh]">
          <img src={luxuryPic} className="md:w-[4vw] w-[13.3vw] h-[8vh]" />
          <p className="w-full text-2xl">
            Affordable <br />
            <span className="text-[#3577F6] w-full text-2xl">Luxury</span>
          </p>
          <p className="w-full text-[#625D5D] font-thin">
            We secure exclusive deals, making your dream vacations both
            cost-effective and enjoyable. Your adventure begins with us.
          </p>
        </div>
      </div>
    </section>
  );
}
