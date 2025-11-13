import React from 'react'
import Image from 'next/image'

const Username = async({params}) => {
  const {username} = await params
  return (
    <>
    <div className='w-full bg-cover relative'>
      <img className='w-full h-[350px] object-cover border-b-1 border-slate-500' src={"/codingbg.gif"} alt="coding" />
      <div className='absolute -bottom-11 left-[46%] border border-slate-500 rounded-lg'>
        <Image className='rounded-lg' src={"/profilepic.gif"} alt='profile pic' width={120} height={120}/>
      </div>
    </div>
    <div className="info-details flex justify-center items-center mt-12 flex-col gap-2 text-center">
      <div className='font-bold text-2xl text-slate-100 shadow'>
      @{username}
      </div>
      <div className='font-semibold text-sm text-slate-200'>
        Creating fascinating programs and applications
      </div>
      <div className='text-md text-slate-400'>
        142 paid members | 20 posts
      </div>
    </div>
    </>
  )
}

export default Username
