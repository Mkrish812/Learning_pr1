import React from 'react'

export default function ParllXScroll() {
  return (
   <section className='h-[50vh] relative'>
    <div style={{ backgroundImage: "url('assets/parl.jpg')" }} className=' absolute top-0 w-full h-[50vh] left-0   bg-cover bg-fixed bg-center '>
    </div>
    <div className='bg-custom-end/60  text-white flex flex-col gap-5 absolute inset-0 px-5 py-10 justify-center items-center '>
        <h1 className='text-2xl font-bold text-center '>A Detailed Examination Of A Specific Case</h1>
        <p className='text-center'>Together, we manage and empower markets by utilizing both established and emerging channels for potential growth.</p>
        <div className='flex gap-10'>
             <button className='font-medium py-2 px-3 rounded-xl text-white bg-custom-end hover:bg-indigo-700 '>Join Now</button>
             <button className='font-medium py-2 px-3 rounded-xl border-white border-2 bg-transparent hover:bg-white hover:text-custom-end '>Join Now</button>
        </div>
    </div>
   </section>
  )
}
