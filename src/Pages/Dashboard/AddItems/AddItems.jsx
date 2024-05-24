import { FaUtensils } from "react-icons/fa";
import Title from "../../Shared/Title";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure=useAxiosSecure()
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const { name, category, price, recipe } = data;
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name,
        category,
        price: parseFloat(price),
        recipe,
        image: res.data.data.display_url,
      };
      const menuRes=await axiosSecure.post('/menu',menuItem)
      console.log(menuRes.data)
      if(menuRes.data.insertedId){
        toast.success('Item added successfully')
      }
    }
  };
  return (
    <div>
      <div>
        <Title Heading={"ADD AN ITEM"} subHeading={"---What's new?---"}></Title>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-9/12 mx-auto font-inter"
        >
          <fieldset className=" p-6 rounded-md shadow-sm dark:bg-gray-50 w-full">
            <div className="grid grid-cols-6 gap-4     ">
              <div className="col-span-full  w-full">
                <label className="font-semibold ">Recipe name*</label>
                <input
                  {...register("name", { required: true })}
                  id="name"
                  type="text"
                  placeholder="Recipe name"
                  className="w-full rounded-md focus:ring  py-3 pl-2  mt-4 "
                />
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="font-semibold ">Category*</label>
                <select
                  className="select w-full rounded-md focus:ring focus:ring-opacity-75  border-none  mt-4"
                  {...register("category", { required: true })}
                >
                  <option disabled selected>
                    Select a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </div>

              <div className="col-span-full sm:col-span-3">
                <label className="font-semibold mb-2">Price*</label>
                <input
                  {...register("price", { required: true })}
                  type="text"
                  placeholder="Price"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 py-3 pl-2  mt-4 "
                />
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="zip" className="font-semibold ">
                <label htmlFor="zip" className="font-semibold ">
                  Recipe Details*
                </label>
              </label>
              <textarea
                {...register("recipe", { required: true })}
                placeholder="Recipe Details"
                className="textarea border-none text-black textarea-bordered  w-full mt-2"
              ></textarea>
              <div className="mt-4">
                <input
                  {...register("image", { required: true })}
                  type="file"
                  className="file-input file-input-bordered file-input-base-200 w-full max-w-xs"
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex bg-[#835D23] my-5 px-5 py-3 rounded-md items-center text-white text-lg "
            >
              Add Item <FaUtensils size={30} className="pl-3"></FaUtensils>{" "}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
