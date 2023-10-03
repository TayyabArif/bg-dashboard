import React from 'react'
import Image from 'next/image'


const PriceCard = ({price}) => {
  return (
    <div className='flex flex-col items-center w-[461px] h-[484px] bg-white rounded-md shadow-lg mt-2 pt-[2.25rem]'>
        <Image src="/admin/BG.svg" alt="Ellipse1" width={100} height={100} />
        <h3 className='text-[#7f63f4] font-[Circular Std Book] text-xl font-normal leading-[3.9rem] w-[8.5rem] h-[1.5rem] text-center'>{price.title}</h3>
        <h3 className='text-[#abafb3] font-[Circular Std Book] text-[1.18rem] font-normal leading-[4.1rem] w-[7.313 rem] h-[1.375rem] text-center'>{price.subTitle}</h3>
        <div className=' block w-[2.44rem] h-[0.125rem] bg-[#7f63f4] mt-[3rem]'></div>
        <div className='w-[24.1rem] h-[5.2125rem] flex flex-wrap flex-col justify-between mt-[1.5rem] '>
          <p className='font-normal text-[1rem] font-[Circular Std Book] text-center text-[#abafb3]'>{price.description}</p>
          <p className='font-normal text-[1rem] font-[Circular Std Book] text-center text-[#abafb3]'>{price.price}</p>
        </div>
    </div>

  )
}

export default PriceCard
