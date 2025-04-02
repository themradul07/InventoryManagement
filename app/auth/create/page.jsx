"use client"
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router
import toast from "react-hot-toast";






const Login = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      let res = await fetch("/api/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),


      })

      if (!res.ok) {
        toast.error("User Already Exist");
      }
      else {
        toast.success("User created successfully");
        router.push('/');
      }
    } catch (err) {
      console.log("Something Went Wrong");
      toast.error("Something went Wrong");


    }
  }



  return (
    <div className="w-full  flex">
      {/* left section */}
      <div className="hidden md:block w-[75%] bg-blue-300">


      </div>
      {/* right section */}
      <div className="w-full border-r bg-sec h-screen flex flex-col gap-4 justify-center items-center">
        <div className="text-xl">
          Create Your Account
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[25vw] text-sm gap-2">
          {/* register your input into the hook by invoking the "register" function */}

          <div>

            <label htmlFor="name">Name</label>
            <input className="w-full max-w-[80vw] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" {...register("name")} />
          </div>
          <div>

            <label htmlFor="email">Email</label>
            <input className="w-full max-w-[80vw] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter you email" {...register("email")} />
          </div>
          {/* include validation with required or other standard HTML validation rules */}
          <div className="flex gap-2">

            <div>


              <label htmlFor="contact">Contact No.</label>
              <input className="w-full max-w-[80vw] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" placeholder="Enter your contact no." {...register("contact", { required: true })} />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div>

              <label htmlFor="rank">Rank</label>
              <select name="rank" id="rank" className="bg-gray-200 p-2" {...register("rank")}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
          {/* errors will return when field validation fails  */}

          <div>

            <label htmlFor="password">Password</label>
            <input className="w-full max-w-[80vw] border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" placeholder="Enter your password" {...register("password", { required: true })} />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          {/* 
          <label htmlFor="contact"></label>
          <input type="number" name="contact"/> */}




          <input className="w-full max-w-[80vw] border bg-blue-500 text-white rounded-md py-2 px-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit" />
        </form>
        <p className="inline text-xs">Already Registered? <Link href={'/auth'} className="text-blue-500 inline">Login</Link></p>
      </div>

    </div>
  )
}

export default Login