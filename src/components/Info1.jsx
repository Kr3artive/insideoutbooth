
import HeroCover from "../images/HeroCover.jpg"
import PIC1 from "../images/PIC1.jpg"
import PIC3 from "../images/PIC3.jpg"
import PIC4 from "../images/PIC4.jpg"
import PIC5 from "../images/PIC5.jpg"

const Info1 = () => {
  return (
    <div className='grid justify-center p-6'>
      <div className="mb-2">
        <h1 className="text-center text-2xl">ABOUT US</h1>
      </div>
      <div className="grid justify-center mb-2">
        <p className="text-center font-extrabold text-3xl max-w-[800px]">A DEDICATED TEAM OF PHOTOGRAPHERS, CAPUTURING PRECIOUS MOMENTS WITH EVERY CLICK</p>
      </div>
      <div className=" grid justify-center mb-10">
        <p className="text-center font-medium max-w-[1000px]">
          With our expertise and artistic vision, we are committed to presenting a unique story every time our shutter closes, We believe that beauty lies in small details.
        </p>
      </div>
      <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5'>
        <div className="sm:h-fit grid justify-end"><img className="lg:w-[200px]" src={PIC4} alt="" /></div>
        <div className="sm:h-fit"><img src={HeroCover} alt="" /></div>
        <div className="sm:h-fit"><img className="lg:h-[360px]" src={PIC3} alt="" /></div>
        <div className="sm:h-fit"><img src={PIC1} alt="" /></div>
        <div className="sm:h-fit grid justify-start"><img className="lg:w-[200px]" src={PIC5} alt="" /></div>
      </div>
    </div>
  )
}

export default Info1
