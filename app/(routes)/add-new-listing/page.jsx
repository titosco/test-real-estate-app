"use client"
import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'


const AddNewListing = () => {
    const [selectedAddress, setSelectedAddress] = useState();
    const [coordinates, setCoordinates] = useState();

    nextHandler=()=>{
      console.log(sele, coordinates)
    }
  return (
    <div className='mt-10 md:mx-56 lg:mx-80'>
    <div className='p-10 flex flex-col gap-5 items-center justify-center'>
      <h2 className='font-bold text-2xl'>
        Add New Listing
      </h2>
      <div className='p-10 w-full rounded-lg border shadow-md flex flex-col gap-5'>
        <h2 className='text-gray-500'>
            Enter Address Which You Want To List
        </h2>
        <GoogleAddressSearch
            selectedAddress={(value) => setSelectedAddress(value)}
            setCoordinates={(value) => setCoordinates(value)}
         />
        <Button
            onClick={nextHandler}
        >Next</Button>
      </div>
    </div>
    </div>
  )
}

export default AddNewListing
