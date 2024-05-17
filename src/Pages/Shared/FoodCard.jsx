const FoodCard = ({ item }) => {
  const { image, recipe, name ,price} = item;
  return (
    <div className="">
      <div className="h-full w-[370px] relative ">
        <figure>
          <img className="w-full h-[200px]" src={image} alt="Shoes" />
        </figure>
        <div className="text-center max-h-[180px] min-h-[180px] bg-[#F3F3F3] px-2 ">
            <p className="bg-[#111827] font-inter absolute text-white px-3 py-1 right-4 top-5 ">${price}</p>
          <h2 className=" text-center text-xl font-inter font-semibold pt-6">{name}</h2>
          <p className="font-inter text-sm py-2">{recipe}</p>
          <div className="card-actions justify-center">
            <button className="uppercase text-[#BB8506] font-inter font-medium border-b-[#BB8506] border-b-2 px-4 py-2 rounded-xl hover:border-none hover:bg-[#111827] mb-4">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
