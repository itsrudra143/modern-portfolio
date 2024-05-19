import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center"
      id="contact"
    >
      <div>
        <img
          src="/Images/form-bg.png"
          alt=""
          className="relative w-full object-cover xs:h-[650px] sm:h-[650px] md:h-[700px]"
        />
      </div>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="bg-[#15263e] w-max h-max flex flex-col items-center justify-center sm:py-10 px-16 xs:px-5 py-6 sm:w-[500px]">
          <h1 className="text-white tracking-wide uppercase font-bold leading-[113px] sm:text-5xl xs:text-3xl mb-3 md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="text-white tracking-wide font-avant-garde-ce sm:text-lg xs:text-md sm:text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 items-center justify-center"
            >
              <div className="flex gap-4 mt-5 sm:flex-wrap xs:flex flex-col lg:flex-row">
                <input
                  {...register("name", { required: true })}
                  className="sm:w-64 h-12 pl-4 outline-none md:h-10"
                  type="text"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}

                <input
                  {...register("phone", { required: true })}
                  className="w-64 h-12 pl-4 outline-none md:h-10"
                  type="tel"
                  placeholder="Phone"
                />
                {errors.phone && (
                  <span className="text-red-500">Phone is required</span>
                )}

                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  })}
                  className="w-64 h-12 pl-4 outline-none md:h-10"
                  type="email"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500">Valid email is required</span>
                )}
              </div>
              <textarea
                {...register("message", { required: true })}
                className="w-full h-28 pt-4 pl-4 outline-none"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <span className="text-red-500">Message is required</span>
              )}

              <button
                className="w-52 h-16 bg-gradient text-white text-lg tracking-wide uppercase font-bold mt-3 sm:w-40 sm:h-14 sm:font-medium md:w-44 md:h-12 md:text-base lg:w-[180px]"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
