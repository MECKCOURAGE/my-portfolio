import { useState, useEffect } from "react";

export default function FirstPage() {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 500);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1500);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:h-[607px] bg-gray items-center p-[20px] pb-[50px] md:p-[40px] md:pb-[130px] justify-between ">
      <div className="order-1 md:order-2">
        <img
          src="./images/mainimage.webp"
          alt="Main Image"
          className={`md:h-[400px] md:w-[400px] mr-[30px] transition-opacity duration-1000 ease-in-out ${
            showImage ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="order-2 md:order-1">
        <h1
          className={`font-light  md:text-[115px] text-[70px] text-customGreen transition-all duration-1000 ease-in-out ${
            showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } font-sans`}
        >
          Welcome.
        </h1>
        <p
          className={`w-[100%] md:w-[670px] text-customGreen text-[16px] md:text-left text-center font-light transition-all duration-1000 ease-in-out ${
            showText ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          My name is Courage Meck, a front-end developer based in Abuja, Nigeria.
          I have expertise using React and Tailwind CSS to work on various
          projects, from utility apps to web service applications, with a focus
          on building visually appealing and well-crafted interfaces with
          responsive design.
        </p>
      </div>
    </div>
  );
}
