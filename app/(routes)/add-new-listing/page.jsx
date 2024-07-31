"use client"
import GoogleAddressSearch from '@/app/_components/GoogleAddressSearch'
import { Button } from '@/components/ui/button'
import { supabase } from '@/utils/supabase/client'
import { useUser } from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'sonner'


const AddNewListing = () => {
    const [selectAddress, setSelectedAddress] = useState();
    const [coordinates, setcoordinates] = useState();
    const {user} =useUser();
    const [loader, setLoader]= useState(false);
    const router =useRouter();

    const nextHandler= async()=>{
      setLoader(true);
      const { data, error } = await supabase
      .from('listing')
      .insert([
        { address: selectAddress.label,
           coordinates: coordinates,
           createdBy:user?.primaryEmailAddress.emailAddress
           },
      ])
      .select()

      if(data){
        setLoader(false);
        console.log('data added succesfully', data);
        toast('New Address added for Listing');
        router.replace('/edit-listing/'+data[0].id);
      }
      if(error){
        setLoader(false)
        console.log('error')
        toast('Server side error')
      }
              
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
            selectAddress={(value) => setSelectedAddress(value)}
            setcoordinates={(value) => setcoordinates(value)}
         />
        <Button
            disabled={!selectAddress || !coordinates || loader}
            onClick={nextHandler}
        >
          {loader?<Loader className='animate-spin'/>:'Next'}
          Next</Button>
      </div>
    </div>
    </div>
  )
}

export default AddNewListing
