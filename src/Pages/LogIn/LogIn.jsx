import logoPic from "../../Pictures/logo.png";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function btnHandler() {
    if (email && password) {
      const userData = { email: email, password: password };
      console.log(userData);
      setEmail("");
      setPassword("");
    }
  }
  return (
    <section className="w-screen h-screen flex items-center bg-[#3477F6] justify-center">
      <div className="w-1/2 h-1/2 bg-white rounded-xl flex gap-10 p-5">
        <div className="md:w-1/2 w-full flex flex-col gap-5">
          <h1 className="text-center text-xl">Log In</h1>
          <div className="flex flex-col gap-4">
            <p>Email:</p>
            <input
              onChange={(e) => handleEmail(e)}
              value={email}
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-300 h-[30px] rounded-md p-2"
            ></input>
          </div>
          <div className="flex flex-col gap-4">
            <p>Password:</p>
            <input
              value={password}
              onChange={(e) => handlePassword(e)}
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full bg-gray-300 h-[30px] rounded-md p-2"
            ></input>
          </div>
          <button
            onClick={btnHandler}
            className="w-[100px] rounded-md text-white bg-[#3477F6] hover:bg-[#0E3771] h-[35px]"
          >
            Log In
          </button>
          <div className="flex justify-between">
            <p className="underline underline-offset-6 text-blue-600 cursor-pointer">
              Forgot Password?
            </p>
            <p className="underline underline-offset-6 text-blue-600 cursor-pointer">
              Register
            </p>
          </div>
        </div>
        <figure className="md:w-1/2 md:flex hidden ">
          <img src={logoPic} className="object-contain" />
        </figure>
      </div>
    </section>
  );
};

export default LogIn;
