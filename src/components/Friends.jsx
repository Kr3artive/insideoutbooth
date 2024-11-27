import { FaSquareInstagram } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa6"
import { FaTiktok } from "react-icons/fa6"
import { FaSquareXTwitter } from "react-icons/fa6"
import { IoLogoYoutube } from "react-icons/io5"

const Friends = () => {
  return (
    <div className='grid justify-center'>
      <div>
        <h1 className='text-center text-xl font-semibold'>Let's be friends</h1>
      </div>
      <div className='grid m-2 items-center gap-2 sm:grid-cols-1 md:grid-cols-5'>
        <div className='grid justify-center'><FaSquareInstagram size={25} /></div>
        <div className='grid justify-center'><IoLogoYoutube size={25} /></div>
        <div className='grid justify-center'><FaTiktok size={25} /></div>
        <div className='grid justify-center'><FaSquareXTwitter size={25} /></div>
        <div className='grid justify-center'><FaFacebook size={25} /></div>
      </div>
    </div>
  )
}

export default Friends
