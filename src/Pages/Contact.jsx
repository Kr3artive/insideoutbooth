import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-center text-black">
            Contact Us
          </h1>
          <p className="text-center text-black mt-4">
            We'd love to hear from you! Please fill out the form below or visit
            us at our location.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 p-6 md:p-12">
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your full name"
                  className={`w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-black focus:border-black ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-black"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Enter your email address"
                  className={`w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-black focus:border-black ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-md mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-md font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  rows="5"
                  placeholder="Enter your message"
                  className={`w-full mt-1 p-3 border rounded-lg shadow-sm focus:ring-black focus:border-black ${
                    errors.message ? "border-red-500" : ""
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-md mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-medium rounded-lg"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex justify-center">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31512.17626100028!2d7.329980898851901!3d9.152482438130983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104ddf4f83110c5b%3A0x1ab5285d9273b9ff!2sFO1%20Roundabout!5e0!3m2!1sen!2sng!4v1732803494634!5m2!1sen!2sng"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
