'use client';
import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useParams, useRouter } from 'next/navigation';

const page = () => {
    const { id } = useParams();
    const router = useRouter();
    const [content, setContent] = useState({});

    const take = async(params) => {
        let data = await fetch(`/api/product/check/${id}`, { method: "POST", body: JSON.stringify({ id }) });
        let response = await data.json();
        return response;
      
    }
    
    const returnItem = (params) => {
        console.log("returning iteffm");
      
    }

    useEffect(() => {
        if (!id) return; // Avoid fetching when id is undefined
        const fetchData = async () => {
            try {
                let response = await fetch(`/api/product/${id}`);
                let data = await response.json();
                console.log(data);
                setContent(data.body);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [id]);
    return (
        <div className='min-h-screen flex '>
            <div className='flex flex-col justify-center items-center min-h-screen gap-5 w-[55%] p-4 text-center max-w-[500px] mx-auto'>

                {/*  */}

                <div>
                    <img src={content.img} className='w-60 h-50 object-cover' alt="" />
                </div>

                <div className='text-2xl font-semibold'>
                    {content.name}

                </div>

                <div className='text-lg '>
                    {content.description}
                </div>
                <div className='text-lg '>
                    Token Required : {content.token}
                </div>

                <div className='flex gap-3'>
                    <button onClick={()=>take} className='min-w-15 bg-pri text-white px-4 py-2 rounded-sm'>Take</button>
                    <button onClick={()=>returnItem} className='min-w-15 bg-pri text-white px-4 py-2 rounded-sm'>Return</button>

                </div>

            </div>




        </div>
    )
}

export default page