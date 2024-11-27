import { useContext } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { SmallScreenContext } from "../contexts/SmallScreenContext";

const Header = () => {
  const { smallscreen, handleSmall } = useContext(SmallScreenContext);

  return (
    <div className="sticky top-0 z-50 flex items-center justify-around p-2 shadow-md bg-white">
      <div>
        <Link to="/" className="text-xl font-bold">
          theinsideoutbooth
        </Link>
      </div>
      <div className="hidden lg:flex gap-2">
        <Link className="border-b-2 border-black" to={"/gallery"}>
          Gallery
        </Link>
        <Link className="border-b-2 border-black" to={"/contact"}>
          Contact Us
        </Link>
      </div>
      <div>
        <a className="hidden rounded-xl lg:flex bg-black text-white p-2" href="">
          EMAIL US
        </a>
      </div>
      <div className="flex lg:hidden relative">
        {!smallscreen ? (
          <GiHamburgerMenu size={25} onClick={handleSmall} />
        ) : (
          <MdClose size={25} onClick={handleSmall} />
        )}
        {smallscreen && (
          <div
            className="absolute top-8 right-0 rounded-lg mt-2 w-48 bg-white shadow-md p-4 flex flex-col items-start gap-4 transform transition-transform duration-300 ease-in-out"
          >
            <Link
              className="font-semibold text-xl w-full text-center"
              to={"/"}
              onClick={handleSmall}
            >
              Home
            </Link>
            <Link
              className="font-semibold text-xl w-full text-center"
              to={"/gallery"}
              onClick={handleSmall}
            >
              Gallery
            </Link>
            <Link
              className="font-semibold text-xl w-full text-center"
              to={"/contact"}
              onClick={handleSmall}
            >
              Contact Us
            </Link>
            <a
              className="bg-black rounded-xl text-white p-2 w-full text-center"
              href=""
              onClick={handleSmall}
            >
              EMAIL US
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
