const Blog = () => {
  const blogData = {
    message: "Personal Advisor",
    title: "Computer and Using Some Color",
    description:
      "Lorem ipsum dolor sit amet, consectetur \n adipielit. Sunt sed ad possimus magm \n maiores.Ipa Lorem ipsum dolor sit amet, \n consectetur adiic Sunt posimus magnam . ",
  };
  const images = ["Blog1.png", "Blog2.png", "Blog3.png"];
  return (
    <div id="blog" className="flex flex-col w-full items-center justify-center gap-10 py-10">
      <div className="flex flex-col items-center justify-center gap-3">
        <h1 className="font-avant-garde-ce text-6xl uppercase text-[#15263e] text-center font-bold tracking-widest xs:text-4xl">
          Blog
        </h1>
        <p className="font-avant-garde-ce text-center text-[#4d4d4d] tracking-wider xs:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 font-avant-garde-ce xs:flex-col xs:p-3 sm:flex-wrap sm:gap-5 md:flex-wrap lg:flex-wrap xs:gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 xs:flex-wrap xs:text-center xs:items-center"
          >
            <img
              src={`/Images/${image}`}
              alt=""
              className="w-[350px] h-[210px] object-cover xs:w-[300px] xs:h-[190px]"
            />
            <h4 className="text-[#929292] uppercase tracking-wider leading-7 mt-3 sm:leading-5 sm:tracking-wide sm:text-center md:text-center">
              {blogData.message}
            </h4>
            <h2 className="text-[#15263e] tracking-wider leading-7 text-xl font-semibold md:text-center">
              {blogData.title}
            </h2>
            <p className="whitespace-pre-line text-[#494949] leading-7 tracking-widest md:text-center md:text-base">
              {blogData.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
