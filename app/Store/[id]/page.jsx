'use client';
import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useParams, useRouter } from 'next/navigation';

const QrPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [content, setContent] = useState({ _id: { "$oid": "67f0de69d553f5f03887616e" },
  name: "bhbhbhbh", 
  token: null, 
  img: "https://imgs.search.brave.com/U4ndTn7W2dWQD7ecYxXNlyzBaldDnvPAAwiu6PFtGXo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdGhvci1oYW1t/ZXItNHA2dHp1MnRh/dzhoOHp2Yi5qcGc", 
  description: "", 
  isAvailabe: true, 
  "__v": { "$numberInt": "0" } });

  useEffect(() => {
    if (!id) return; // Avoid fetching when id is undefined
    const fetchData = async () => {
      try {
        console.log(id);
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


  // if (data == "") return <div>Loading...</div>;

  return (
    <div className='min-h-screen flex'>

      <div className='bg-pri w-[45%] flex flex-col justify-center items-center h-[100%] min-h-screen'>
        {/* <img src="https://imgs.search.brave.com/bvfNSKTk4Izt2NcqSdZcUfAnVXBvQPPfCzoNmRH_IdA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xNC83OC9z/YW1wbGUtcXItY29k/ZS12ZWN0b3ItNzEx/NDc4LmpwZw" alt="" />         */}
        <QRCodeSVG value={`http//localhost:3000/product/check/${id}`} />
      </div>

      <div className='flex flex-col justify-center items-center min-h-screen gap-5 w-[55%] p-4 text-center max-w-[500px] mx-auto'>

        {/*  */}

        <div>
          {content.img && <img src={content.img} className='w-60 h-50 object-cover' alt="hhhh" />}
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

        <div>
          <a href=""> Download Qr code.</a>
        </div>

      </div>

    </div>
  )
}

export default QrPage