import React from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { GiAllSeeingEye } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth/auth";
import { useState } from "react";
import ToggleState from "../hooks/ToggleState";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState();
  const { login } = useAuth();

  const [showPass, setShowPass] = ToggleState();

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        values
      );
      login(values.username);
      console.log(response);
      navigate("/home");
    } catch (error) {
      setError(error.response.data.msg);
      console.error("Error:", error);
    }
  };

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <main className="login-container-main min-h-screen text-white grid grid-cols-1 place-content-around md:grid-cols-2 md:place-content-start md:gap-6 overflow-hidden ">
      <div className=" backdrop-blur-md h-[100vh] hidden md:block p-8 bg-[#0000003f]">
        <h2 className="text-4xl text-custom-yellow">Login Now</h2>
      </div>
      <div className="flex flex-col md:bg-[#0000003f] backdrop-blur-md  text-white justify-around p-8 md:relative md:-left-36 gap-10 md:gap-0 login-cont">
        <div>
          <h1 className="expense text-[1.5rem] leading-[1rem] tracking-wider md:text-4xl">
            EXPENSE
          </h1>
          <h1 className="text-[1.5rem] tracker md:text-4xl">TRACKER</h1>
        </div>
        <div className="">
          <p className="text-3xl font-extrabold mb-2">
            Welcome To Expense Tracker
          </p>
          <p>
            Don&apos;t have an account ?{" "}
            <Link to="/signup">
              <strong>Create Now</strong>
            </Link>
          </p>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            method="post"
            className="flex flex-col gap-8 items-start justify-start w-full"
            id="form"
          >
            <fieldset
              className={
                errors.username && touched.username
                  ? "border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative"
                  : "border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative"
              }
            >
              <legend className="text-lg tracking-wide">Username</legend>
              <input
                className="p-3 w-full  outline-none"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                id="username"
              />
              <div className="absolute right-0 p-5  -top-3 rounded-sm h-16">
                <FaUser className="text-custom-yellow text-2xl" />
              </div>
            </fieldset>
            <p>
              {errors.username && touched.username && (
                <p className="font-bold text-red-500">{errors.username}</p>
              )}
            </p>
            <fieldset
              className={
                errors.password && touched.password
                  ? "border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative"
                  : "border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative"
              }
            >
              <legend className="text-lg tracking-wide">Password</legend>
              <input
                className="p-3 w-full outline-none"
                type={showPass ? "text" : "password"}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                id="password"
              />
              <div className="absolute right-0 p-5 -top-3 rounded-sm h-16  ">
                {showPass ? (
                  <GiAllSeeingEye
                    className="text-custom-yellow text-4xl cursor-pointer "
                    onClick={() => setShowPass((preval) => !preval)}
                  />
                ) : (
                  <AiFillEyeInvisible
                    className="text-custom-yellow text-4xl cursor-pointer "
                    onClick={() => setShowPass((preval) => !preval)}
                  />
                )}
              </div>
            </fieldset>
            <p>
              {errors.password && touched.password && (
                <p className="font-bold text-red-500">{errors.password}</p>
              )}
            </p>

            <p className="text-md text-red-500 font-bold w-full text-center">
              {error}
            </p>

            <button
              className="add-linear-bg-3 p-5 rounded-md w-full"
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </form>
          <div className="text-center block md:hidden mt-5">
            <button>
              Forgot Password ? <strong>Reset For Free</strong>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute  right-0 w-40 h-screen bg-[#141326] text-black hidden md:block m-auto">
        <div className="text-center flex items-center justify-center h-full">
          <p className="rotate-90 text-lg text-custom-yellow cursor-pointer ">
            Forgot Password ?{" "}
            <strong className="text-white">Reset For Free</strong>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
