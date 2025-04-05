"use client"
import React from 'react'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
const page = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const router =  useRouter();
    const onSubmit = async (data) => {
        toast.success("Submitted Successfully");
        console.log(data);
        try{
        console.log("is Submiiting");
        let res = await fetch('/api/product/create', {
            method : "POST",
            headers: {"Content-type":"application/json"} ,
            body: JSON.stringify(data),

        })

        let resjson = await res.json();
        console.log(resjson);
        if(resjson.failure){
            toast.error(resjson.msg);
            return;
        }
        toast.success(resjson.msg);
        router.push(`/Store/${resjson.body._id}`);
    }
    catch{
        toast.error("Went Wrong")
    }

    
    };

    // console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div className='w-full min-h-screen  flex justify-center items-center'>
            <div className='flex flex-col gap-6'>
                <div className='text-xl text-center ' >Add a Product</div>

                <div className='bg-sec  p-3 rounded-sm'>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-[95vw] md:w-[420px]'>
                    <label htmlFor='name'>Product Name</label>
                    <input  className='bg-white p-2 rounded-sm  text-black' placeholder='Product title..' {...register("name")} />
                    
                    
                    <label htmlFor='description'>Product Description</label>
                    <input  className='bg-white p-2 rounded-sm  text-black' placeholder='Product description..' {...register("description")} />
                    
                    <label htmlFor='img'>Product Image</label>
                    <input  className='bg-white p-2 rounded-sm  text-black' placeholder='Enter the image url..' {...register("img")} />
                    
                    
                    <label htmlFor='token'>Tokens</label>
                    <input type='number'  className='bg-white p-2 rounded-sm  text-black' placeholder='Tokens required' {...register("token")} />

                    
                    <input type="submit" className='bg-pri p-2 w-20 text-white rounded-sm' />
                </form>
             
                </div>
            </div>


        </div>
    )
}

export default page