
import img1 from "../../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="my-20 pt-28 pb-32 bg-cover bg-center object-cover text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img1})`,
      }}
    >
      <div className="">
      <div className="text-center py-8">
            <p className="text-[#D99904] font-inter  italic py-2">---Check it out---</p>
            <h3 className="border-t-4 border-b-4 py-4 mx-auto max-w-sm my-4 border-t-[#E8E8E8] border-b-[#E8E8E8] text-white font-inter text-3xl font-medium">FROM OUR MENU</h3>
        </div>
        
      </div>
      <div className="">
        <div className="flex justify-center items-center gap-7">
          <img className="w-[450px]" src={img1} alt="" />
          <div className="w-[550px] font-inter">
            <h2 className="text-lg py-2">March 20, 2023.</h2>
            <h2>WHERE CAN I GET SOME?</h2>
            <p className="pb-4">
              Welcome to our online culinary haven, where every click unveils a
              world of delectable delights waiting to be savored. Dive into our
              virtual menu, meticulously curated to cater to diverse tastes and
              preferences. From tantalizing appetizers to mouthwatering main
              courses, each dish is a celebration of flavors, crafted with love
              and expertise. Indulge in our array of culinary creations.
            </p>
            <a className="relative  px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-xl shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease rounded-xl"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                Read More
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
