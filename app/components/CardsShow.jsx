"use client"
import React from 'react'

const CardsShow = ({Stores}) => {
  return (
    <div><div className='min-h-[100vh]'>

    {/* main upar */}
    <div className='h-[20vh] px-8 text-3xl font-extralight text-center  flex justify-center items-center text-white overflow-hidden bg-pri'>
      Find the best equipment for your need
    </div>

    {/* cards section */}
    <main className=" pb-12 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-white text-gray-900">

      {/*filter portion  */}
      <div className="scale-80 p-6 border-b flex flex-wrap gap-4 mb-8 items-center justify-start">
        {/* <InventoryCategories /> */}
      </div>




      {/* {AllEvents.length == 0 && <div className='w-full mx-auto text-center'>No Events to Show</div>} */}
      <div className='w-full mx-auto'>

        <div
          // className='flex flex-wrap gap-4 w-full mx-auto text-center justify-center items-center max-w-[1540px]'
          className="max-w-[1540px] gap-2 grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-300"
        >

          {Stores.reverse().map((e, index) => {
            return <div key={index} className='w-full flex justify-center'> <a href={`/${e.title}`}>
              <Card img={e.img} isPaid={e.isPaid} category={e.category} mon={e.month} title={e.title} token={e.tokens} description={e.description} time={e.time} medium={e.medium} venue={e.venue} />
            </a>
            </div>

          })}





        </div>
      </div>

    </main>



  </div></div>
  )
}

export default CardsShow