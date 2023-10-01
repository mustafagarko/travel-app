import logoPic from "../../Pictures/logo.png";

const LogIn = () => {
  return (
    <section className="w-screen h-screen flex items-center bg-[#3477F6] justify-center">
      <div className="w-1/2 h-1/2 bg-white rounded-xl flex gap-10 p-5">
        <div className="md:w-1/2 w-full flex flex-col gap-10">
          <h1 className="text-center text-xl">Log In</h1>
          <div className="flex flex-col gap-4">
            <p>Email:</p>
            <input className="w-full bg-gray-300 h-[30px] rounded-md"></input>
          </div>
          <div className="flex flex-col gap-4">
            <p>Password:</p>
            <input className="w-full bg-gray-300 h-[30px] rounded-md"></input>
          </div>
          <p className="underline underline-offset-4 text-blue-600 cursor-pointer">
            Forgot Password?
          </p>
        </div>
        <figure className="md:w-1/2 md:flex hidden ">
          <img src={logoPic} className="object-contain" />
        </figure>
      </div>
    </section>
  );
};

export default LogIn;
