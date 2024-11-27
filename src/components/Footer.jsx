import { FaPhone } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black gap-3 p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:justify-around text-white">
      <div className="mb-4">
        <strong>CONTACTS</strong>
        <div className="flex items-center gap-2 mb-2">
          <span>
            <FaPhone size={20} />
          </span>
          <span>+234-7062987803</span>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <IoLogoInstagram size={25}/>
          </span>
          <span>theinsideoutbooth</span>
        </div>
      </div>
      <div className="mb-4">
        <strong>SERVICE AREAS</strong>
        <div>
          <h1>Abuja, Nigeria</h1>
          <h1>Port-Harcourt, Nigeria</h1>
        </div>
      </div>
      <div className=" mb-4 flex flex-col">
        <strong>COMPANY</strong>
        <Link>Home</Link>
        <Link>Gallery</Link>
        <Link>Location</Link>
      </div>
      <div className="mb-8">
        <strong>OUR OPERATING HOURS</strong>
        <h1>Monday 9am-7pm</h1>
        <h1>Tuesday 9am-7pm</h1>
        <h1>Wednesday 9am-7pm</h1>
        <h1>Thursday 9am-7pm</h1>
        <h1>Friday 9am-7pm</h1>
      </div>
      <div className=" md:w-[400px] mb-8 mt-8">
        <h1>2024 - <strong>THEINSIDEOUTBOOTH.</strong> All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
