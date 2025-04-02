"use client"
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { POST } from "../api/user/route";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";



const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {


    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const resjson = await res.json();
      if(resjson.success){
        toast.success(resjson.msg);
        router.push('/')
      }else{
        toast.success(resjson.msg);
      }
      
    } catch {
      toast.error("Something went wrong!")
    }
  };


  return (
    <div className="w-full  flex">
      {/* left section */}
      <div className="hidden md:block w-[75%] bg-blue-300">


      </div>
      {/* right section */}
      <div className="w-full border-r bg-sec h-screen flex flex-col gap-4 justify-center items-center">
        <div className="text-xl">
          Login
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-60  md:w-[25vw] gap-2 text-sm">
          {/* register your input into the hook by invoking the "register" function */}
          <div>


            <label htmlFor="email">Email</label>
            <input className="w-full max-w-[80vw] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter you email" {...register("email")} />
          </div>

          {/* include validation with required or other standard HTML validation rules */}
          <div>


            <label htmlFor="password">Password</label>
            <input className="w-full max-w-[80vw] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Enter your password" {...register("password", { required: true })} />
          </div>
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}



          <input className="w-full max-w-[80vw] border bg-blue-500 text-white rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit" />
        </form>
        <p className="inline text-xs">Not Registered Yet? <Link href={'/auth/create'} className="text-blue-500 inline">Create an account.</Link></p>
      </div>

    </div>
  )
}

export default Login