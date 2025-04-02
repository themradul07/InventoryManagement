"use client"
import React from 'react'
import InventoryCategories from '../components/InventortFilter';
import Card from '../components/Card';


import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';


const page = () => {

    const [AllTools, setAllTools] = useState([]);
    const [Events, setEvents] = useState([]);
    const [activeButton, setActiveButton] = useState("");
    const [loading, setloading] = useState(false)



    const getTools = async () => {
        try {
            
            const fetchingtools = await fetch("/api/product");
            const fetchtools = await fetchingtools.json();

            // console.log(fetchevents[5].date.split('T')[0].split('-')[2]);
            setAllTools(fetchtools);
            // setEvents(fetchtools);
            // console.log(AllEvents);
        } catch (error) {
            console.log(error);
        }
        // finally{
        //     setloading(false)
        // }
    };

    // const handleMedium = (e) => {
    //     if (e.target.name == '') {
    //         setAllEvents(Events);
    //         return;
    //     }
    //     let filteredArray = Events.filter((item) => { return item.medium == e.target.name; })
    //     setAllEvents(filteredArray);


    // }


    useEffect(() => {
        getTools();


    }, []);

    // const btnClass = "rounded-full border border-purple-600 px-4 py-2 text-sm font-medium text-black hover:bg-purple-500 hover:text-white";
    // const activeBtnClass = "bg-purple-900 text-white";


    // const handleClick = (e) => {
    //     setActiveButton(e.target.name);
    //     let filteredArray = Events.filter((item) => { return item.category == e.target.name; }
    //     )
    //     setAllEvents(filteredArray);
    //     console.log(filteredArray);
    //     // console.log(data)
    // };






//   const [Stores, setStores] = useState([])

//   const StoresData = async () => {
//     const res = await fetch("/api/product", { method: "GET" }); // No trailing slash
//     const data = await res.json();
//     setStores(data);
//   };

//   useEffect(async() => {
//     await StoresData()
//     toast.success("Fetching")

//   }, []);

//   useEffect(() => {
    
//   }, [Stores])
  
    return (
        <div className='min-h-[100vh]'>

            {/* main upar */}
            <div className='h-[20vh] px-8 text-3xl font-extralight text-center  flex justify-center items-center text-white overflow-hidden bg-pri'>
                Find the best equipment for your need
            </div>

            {/* cards section */}
            <main className=" pb-12 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-white text-gray-900">

               {/*filter portion  */}
                <div className="scale-80 p-6 border-b flex flex-wrap gap-4 mb-8 items-center justify-start">
                    <InventoryCategories/>
                </div>




                {/* {AllEvents.length == 0 && <div className='w-full mx-auto text-center'>No Events to Show</div>} */}
                <div className='w-full mx-auto'>

                    <div
                        // className='flex flex-wrap gap-4 w-full mx-auto text-center justify-center items-center max-w-[1540px]'
                        className="max-w-[1540px] gap-2 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-300"
                    >

                        {AllTools.reverse().map((e, index) => {
                            return <div key={index} className='w-full flex justify-center'> <a href={`/${e.title}`}>
                                <Card img={e.img} isPaid={e.isPaid} category={e.category} mon={e.month} title={e.name} token={e.token} description={e.description} time={e.time} medium={e.medium} venue={e.venue} />
                            </a>
                            </div>

                        })}





                    </div>
                </div>

            </main>



        </div>
    )
}

export default page