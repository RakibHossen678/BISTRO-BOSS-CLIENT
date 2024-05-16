import { Parallax } from "react-parallax";

const Cover = ({ header, subHeader, bgImg }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={bgImg}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div>
        <div className="hero bg-cover bg-center object-cover min-h-[500px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="text-center h-56 min-w-[75%] bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] flex justify-center items-center text-white">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-7xl font-cinzel font-semibold py-2">
                {header}
              </h1>
              <p className="text-lg font-medium font-cinzel">{subHeader}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
