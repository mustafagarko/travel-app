export default function HomepageFormSection() {
  return (
    <section className="bg-[#F3F3F3] w-screen md:h-[55vh] h-[91vh] md:px-[8.3vw] md:py-[15.6vh] py-[11.2vh] px-[4vw]">
      <div className="flex md:flex-row justify-between flex-col md:gap-0 gap-[4.5vh]">
        <div className="flex flex-col md:gap-[4.3vh] gap-[3.7vh]  md:w-[32vw] md:h-[23.7vh] h-[25.5vh]">
          <p className="md:text-5xl text-4xl">
            Take a step to a <br /> new adventure
          </p>
          <p className="text-[#625D5D] md:pr-[10vh] md:text-base text-xl font-thin leading-6">
            Let us help you to choose the best travel options
          </p>
        </div>
        <div className="flex flex-col md:gap-[4.3vh] gap-[3.7vh]">
          <form className="flex md:flex-row md:gap-[1.3vw] md:mt-[7.2vh] flex-col gap-[2.2vh]">
            <input
              id="name"
              placeholder="Your name"
              type="text"
              className="md:w-[14.3vw] md:h-[6.7vh] md:p-[1vw] cursor-pointer h-[9.7vh] p-[3vh]"
            />
            <input
              id="phone"
              placeholder="+7 (000) 000-00-00"
              type="tel"
              pattern="[0-9]*"
              minLength="9"
              maxLength="12"
              required
              className="md:w-[14.3vw] md:h-[6.7vh] md:p-[1vw] cursor-pointer h-[9.7vh] p-[3vh]"
            />
            <button
              className="md:w-[11.4vw] md:h-[6.7vh] bg-[#3577F6] hover:bg-[#0E3771] text-white h-[9.7vh] active:scale-95"
              id="btn-submit"
            >
              Submit application
            </button>
          </form>
          <p className="md:text-xs md:px-0 text-[#A6A6A6] md:text-start text-center text-base px-[5vh] font-thin">
            By submitting an application,&nbsp;
            <span className="underline underline-offset-8 cursor-pointer">
              I agree to the processing of personal data
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
