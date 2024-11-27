import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useForm } from "react-hook-form";
import HeroImg from "../Images/HeroImg.jpg";
import { useNavigate } from "react-router-dom";

const WelcomeMessage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  const handleChange = () => {
    setShowMessage(false);
  };

  useEffect(() => {
    setShowMessage(true);
  }, []);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const mailtoLink = `mailto:abiyerowland@gmail.com?subject=Welcome to our mailing list&body=Name: ${data.name}%0AEmail: ${data.email}%0APhone Number: ${data.phonenumber}`;
    window.location.href = mailtoLink;
    navigate("/");
  };

  return (
    <div>
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="relative flex gap-4 bg-white text-black py-4 px-6 rounded-md">
            <div className="sm:max-w-[300px]">
              <h1 className="text-2xl mb-5 text-center text-black">
                Join our mailing list
              </h1>
              <p className="mb-4">
                Be the first to know about new special offers, events and more
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <label htmlFor="name"></label>
                  <input
                    className="w-full border-b-2 border-slate-400"
                    {...register("name")}
                    type="text"
                    placeholder=" Name"
                    id="name"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email"></label>
                  <input
                    className="w-full border-b-2 border-slate-400"
                    {...register("email")}
                    type="text"
                    placeholder=" Email"
                    id="email"
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="phonenumber"></label>
                  <input
                    className="w-full border-b-2 border-slate-400"
                    {...register("phonenumber")}
                    type="text"
                    placeholder=" Phone-Number"
                    id="phonenumber"
                  />
                </div>
                <input
                  onClick={handleSubmit}
                  className=" font-bold bg-black text-white p-2 rounded-md"
                  type="submit"
                  value="SEND US A MAIL"
                />
              </form>
            </div>
            <div className="sm:hidden md:hidden lg:block">
              <img
                className="w-[300px] rounded-xl h-full"
                src={HeroImg}
                alt=""
              />
            </div>
            <button className="absolute top-1 right-1" onClick={handleChange}>
              <IoClose />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeMessage;
