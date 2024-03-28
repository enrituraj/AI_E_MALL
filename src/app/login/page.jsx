import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { RxEyeOpen } from "react-icons/rx";
import { TbEyeClosed } from "react-icons/tb";

export default function Login() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-[100vh]">

        <div className="bg-white w-90 p-10 rounded-lg h-auto">
          <h2 className="text-3xl mb-4 font-semibold">Login</h2>
          <form action="" method="post">


            <div className="relative mb-4 ">
              <CiUser className="absolute left-3 top-1/4 text-3xl font-bold text-slate-500" />

              <input type="text" placeholder="user / email address"
                className="p-3 pl-12 w-full rounded text-lg border-2 border-solid border-slate-300 "
              />
            </div>

            <div className="relative mb-4 ">
              <CiLock className="absolute left-3 top-1/4 text-3xl font-bold text-slate-500" />

              <input type="password" placeholder="Password"
                className="p-3 px-12 w-full rounded text-lg border-2 border-solid border-slate-300 "
              />
              
              {/* <RxEyeOpen />
              <TbEyeClosed /> */}
            </div>


            <div className="flex justify-between items-center font-semibold text-sm">
              <label htmlFor="remember">
                <input type="checkbox" name="" id="remember" className="mr-3" />
                <span>Remember me</span> 
              </label>
              <Link href="#">Forgot password</Link>
            </div>

            <button className="block w-full rounded-lg text-lg font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 my-4">Log in</button>
          </form>
          <button className="flex items-center justify-center w-full rounded-lg text-lg font-semibold py-2.5 px-4 border-2 border-solid border-slate-900 text-slate-700 hover:text-white hover:bg-slate-700 my-2.5">
            <FaGoogle className="mr-3"/>
            <span> Log in With Google</span>            
          </button>

          <hr className="h-1 my-4 border-slate-700"/>

          <p className="text-center">
            Don't have an account ? 
            <Link href="#" className="font-semibold"> Create Account</Link>
          </p>

        </div>

      </div>

    </>
  )
}