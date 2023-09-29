import React from 'react'
import PriceCard from '@/Components/Admin/PriceCard'


const prices = () => {
  const priceData = [
    {
      title : "Product Name",
      subTitle: "Micro Service",
      description: "Description of micro services and product here",
      price: "BRL R$ 00.00",
    },
    {
      title : "Product Name",
      subTitle: "Micro Service",
      description: "Description of micro services and product here",
      price: "BRL R$ 00.00",
    },
    {
      title : "Product Name",
      subTitle: "Micro Service",
      description: "Description of micro services and product here",
      price: "BRL R$ 00.00",
    },
    {
      title : "Product Name",
      subTitle: "Micro Service",
      description: "Description of micro services and product here",
      price: "BRL R$ 00.00",
    },
    {
      title : "Product Name",
      subTitle: "Micro Service",
      description: "Description of micro services and product here",
      price: "BRL R$ 00.00",
    },
    {
      title : "Product Name",
      subTitle: "Micro Service",
      description: "Description of micro services and product here",
      price: "BRL R$ 00.00",
    }
  ]
  return (
    <div className='flex flex-wrap justify-between w-[100%] h-[100%] bg-gray-50 p-5'>
      {priceData.map((price) =>{
        return (<PriceCard price={price}/>)
      })}
    </div>
  )
}

export default prices
