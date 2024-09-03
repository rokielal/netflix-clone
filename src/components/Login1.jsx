import React from "react";
import { BACKGROUND_IMG } from "../utils/constants";

const Login1 = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="backgound image" />
      </div>

      <form className="relative p-12 text-white w-4/12 mt-40 bg-black opacity-80 ">
        <h1 className="font-bold text-xl mb-4">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="p-2 m-2 w-full bg-gray-800 border"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-800 border"
        />
        <button className="p-2 m-2 border w-full bg-[red]">Sign In</button>
        <h1 className="flex justify-center">OR</h1>
        <button className="p-2 m-2 border w-full bg-[gray]">
          Use Sign In Code
        </button>
        <input type="checkbox" className="mt-4" /> <span>Remember Me</span>
        <div className="py-6">
          <span>
            New to Netflix? <span>Sign up now.</span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login1;
