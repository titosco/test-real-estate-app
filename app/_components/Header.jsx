"use client"
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {
    const path = usePathname();
    const {user, isSignedIn} = useUser();
    useEffect(()=>{
        console.log(path)
    }, [])

  return (
    <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>
      <div className='flex gap-12 items-center'>
        <Image src={'/logo.svg'} width={150} height={150} alt='logo'/>
        <ul className='hidden md:flex gap-10'>
            <Link href={'/'}>
                <li className={`'hover:text-primary font-medium text-sm cursor-pointer' ${path=='/'&&'text-primary'}`}>Shortlet</li>
            </Link> 
            <li className='hover:text-primary font-medium text-sm cursor-pointer'>Rent</li>
            <li className='hover:text-primary font-medium text-sm cursor-pointer'>Agent Finder</li>
        </ul>
      </div>
      <div className='flex gap-2 items-center'>
        <Link href={'/add-new-listing'}>
          <Button className='flex gap-2'><Plus className='h-5 w-5'/> Post Your Ad </Button>
        </Link>
        {isSignedIn?
        <UserButton />
        :
        <Link href={'/sign-in'}>
        <Button variant='outline' >Login</Button>
        </Link>

        }
        
      </div>
    </div>
  )
}

export default Header
