const MenuItem = ({ menu }) => {
  const { image, price, recipe, name } = menu;
  return (
    <div className="flex gap-5 justify-between items-center">
      <div>
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-32 h-28  "
          src={image}
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="font-cinzel text-xl font-medium">
            {name}-----------------
          </p>
          <p className="text-[#BB8506] font-inter text-xl font-medium">
            ${price}
          </p>
        </div>
        <p className="text-[#737373] py-1">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
