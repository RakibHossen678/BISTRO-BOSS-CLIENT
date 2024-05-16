import img1 from "../../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="my-20 bg-fixed pt-28 pb-32 bg-cover bg-center object-cover text-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img1})`,
      }}
    >
      <div className="">
        <div className="text-center py-8">
          <p className="text-[#D99904] font-inter  italic py-2">
            ---Check it out---
          </p>
          <h3 className="border-t-4 border-b-4 py-4 mx-auto max-w-sm my-4 border-t-[#E8E8E8] border-b-[#E8E8E8] text-white font-inter text-3xl font-medium">
            FROM OUR MENU
          </h3>
        </div>
      </div>
      <div className="">
        <div className="flex  justify-center items-center gap-7">
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
            <button className=" border-b-2 rounded-lg px-4 py-2">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
