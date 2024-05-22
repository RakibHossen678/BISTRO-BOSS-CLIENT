import { useForm } from "react-hook-form";

import loginImg from "../../assets/others/authentication1.png";
import logo from "../../assets/logo.png";
import bg from "../../assets/others/authentication.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../Shared/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useAuth();
  const axiosPublic=useAxiosPublic()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photo)
      .then(() => {
        //create user entry in the database
        
        const userInfo={
          name:data.name,
          email:data.email
        }
        axiosPublic.post('/users',userInfo)
        .then(res=>{
          if(res.data.insertedId){
            reset()
            toast.success('User created successfully!')
            navigate("/");
          }
        })




        
      });
    });
  };
  return (
    <div
      className="w-full  py-14 px]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="flex flex-row-reverse  w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div className="hidden bg-cover lg:block lg:w-1/2">
          <img
            src={loginImg}
            className="w-full h-full bg-cover bg-center object-cover"
            alt=""
          />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
          </div>

          <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
            Welcome back!
          </p>

          
         <SocialLogin></SocialLogin>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a
              href="#"
              className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or Register with email
            </a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>
              <input
                name="name"
                {...register("name", { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
              {errors.name && (
                <span className="text-red-700 font-semibold text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                PhotoURL
              </label>
              <input
                name="name"
                {...register("photo", { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
              />
              {errors.photo && (
                <span className="text-red-700 font-semibold text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email Address
              </label>
              <input
                name="email"
                {...register("email", { required: true })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
              />
              {errors.email && (
                <span className="text-red-700 font-semibold text-xs">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Password
                </label>
              </div>

              <input
                name="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                })}
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
              />
              {errors.password?.type === "pattern" && (
                <p className="text-red-700 z-10 font-semibold text-xs">
                  Minimum eight characters, at least one letter, one number and
                  one special character
                </p>
              )}
              {errors.password?.type === "required" && (
                <p className="text-red-700 z-10 font-semibold text-xs">
                  Password is Required
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <span className="text-red-700 font-semibold text-xs">
                  Password must be more than 6 characters
                </span>
              )}
              {errors.password?.type === "maxLength" && (
                <span className="text-red-700 font-semibold text-xs">
                  Password must be less than 20 characters
                </span>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D1A054B3] rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <Link
              to="/login"
              className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline"
            >
              or sign in
            </Link>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
