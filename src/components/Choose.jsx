import React from 'react'

const Choose = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2 p-6'>
      <div>
        <h1 className='font-bold'>WHY CHOOSE US</h1>
      </div>
      <div>
        <p className='max-w-[300px]'>We create visual stories that provide unique experiences. With our dedication to exploring the beauty in every moment, we offer more than just images-we capture the emotions, intimacy, and uniqueness that makes every moment worthwhile.</p>
      </div>
      <div className='flex flex-col gap-4'>
        <div>
            <h1 className='font-extrabold text-4xl'>COMPLETE SERVICE</h1>
            <p className='mt-2 md:max-w-[150px]'>Get your preferred photographer for every occassion</p>
        </div>
        <div>
            <h1 className='font-extrabold text-4xl'>UNLIMITED EDITING</h1>
            <p className='mt-2 md:max-w-[150px]'>Awesome editing to get the best photo possible</p>
        </div>
        <div>
            <h1 className='font-extrabold text-4xl'>FIXED RATE</h1>
            <p className='mt-2 md:max-w-[150px]'>Easily booking photographer with fixed hourly rate</p>
        </div>
        <div>
            <h1 className='font-extrabold text-4xl'>SECURED PAYMENTS</h1>
            <p className='mt-2 md:max-w-[150px]'>Payment to photographer only once photo delivered</p>
        </div>
      </div>
    </div>
  )
}

export default Choose
