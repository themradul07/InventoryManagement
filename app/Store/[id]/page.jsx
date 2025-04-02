'use client'
import React from 'react'
import {QRCodeSVG} from 'qrcode.react';
import { useRouter } from 'next/navigation';


const QrPage = () => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <div className='min-h-screen flex'>
      
      <div className='bg-pri w-[45%] flex flex-col justify-center items-center h-[100%] min-h-screen'>
          {/* <img src="https://imgs.search.brave.com/bvfNSKTk4Izt2NcqSdZcUfAnVXBvQPPfCzoNmRH_IdA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xNC83OC9z/YW1wbGUtcXItY29k/ZS12ZWN0b3ItNzEx/NDc4LmpwZw" alt="" />         */}
          <QRCodeSVG value={'http//localhost:3000/product/id'}/>
      </div>

      <div className='flex flex-col justify-center items-center min-h-screen gap-5 w-[55%] p-4 text-center max-w-[500px] mx-auto'>

        {/*  */}

        <div>
        </div>

        <div className='text-2xl font-semibold'>
          Hammer Armoury
        </div>

        <div className='text-lg '>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum cupiditate vel excepturi natus soluta voluptates ab incidunt doloribus obcaecati sed!lorem12 Lorem ipsum dolor sit amet.


        </div>

        <div>
          <a href=""> Download Qr code.</a>
        </div>

      </div>

    </div>
  )
}

export default QrPage