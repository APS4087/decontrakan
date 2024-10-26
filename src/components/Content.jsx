import React from 'react'

export default function Content() {
  return (
    <div className='bg-gray-200  py-8 px-12 h-full w-full flex flex-col justify-between'>
        <Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            <h1 className='text-[14vw] leading-[0.8] mt-10'>D'econtrakan</h1>
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#464444]'>Opening Hours</h3>
                <p>Mon-Sun 08:00AM - 08:00PM</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#464444]'>Find Us</h3>
                <p>Kp. Bunder RT 009/002, Cikupa Tangerang, Banten</p>
                <p>+62-896-8587-1774</p>
                <p>moinefou@hotmail.com</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#464444]'>Links</h3>
                <p>Home</p>
                <p>Properties</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    )
}