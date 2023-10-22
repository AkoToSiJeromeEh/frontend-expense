import React from "react";
import { useFormik } from "formik";
import Axios from "axios";
import { reminderSchema } from "../schemas";
import { TfiWrite } from "react-icons/tfi";
import { CiMoneyBill } from "react-icons/ci";
import { BsCalendar2Date } from "react-icons/bs";
import { useParams } from "react-router-dom";
import ToggleState from "../hooks/ToggleState";
import Sucessmess from "./Sucessmess";
const UpdateReminder = () => {
  const params = useParams();
  const [showSucess, setShowSucess] = ToggleState();

  const onSubmit = async (values, { resetForm }) => {
    const response = await Axios.patch(
      `http://localhost:3000/api/reminders/updateReminder/${params.id}`,
      values
    );
    setShowSucess(false);
    setTimeout(() => {
      resetForm();
      setShowSucess(true);
    }, 2000);
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
      title: "",
      content: "",
      price: "",
      date: "",
    },
    validationSchema: reminderSchema,
    onSubmit,
  });
  return (
    <div className="self-start w-[70%] mx-auto text-white">
     {
       showSucess &&    <Sucessmess success={showSucess} sucessMessage="Successfully Updated" />
     }
     
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-8 items-start justify-start w-full"
      >
        <div className="text-center w-full mt-5">
          <p className="text-4xl mb-5">Update Reminder</p>
          <input
            className={
              errors.title && touched.title
                ? "border-2 border-red-500 bg-white p-6 rounded-full w-64 add-exp-input text-center text-black"
                : "bg-white p-6 rounded-full w-64 add-exp-input text-center text-black"
            }
            type="text"
            placeholder="Title"
            name="title"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.title}
          />
          {errors.title && touched.title && (
            <p className="font-bold text-red-500">{errors.title}</p>
          )}
        </div>
        <fieldset
          className={
            errors.content && touched.content
              ? "border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative"
              : "border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative"
          }
        >
          <legend className="text-lg tracking-wide">Content</legend>
          <input
            className="p-3 w-full "
            type="text"
            name="content"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.content}
          />
          <div className="absolute right-0 p-5 bg-[#00000022] -top-3 rounded-sm h-16">
            <TfiWrite className="text-custom-yellow text-2xl" />
          </div>
        </fieldset>

        {errors.content && touched.content && (
          <p className="font-bold text-red-500">{errors.content}</p>
        )}

        <fieldset
          className={
            errors.price && touched.price
              ? "border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative"
              : "border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative"
          }
        >
          <legend className="text-lg tracking-wide">Price</legend>
          <input
            className="p-3 w-full"
            type="text"
            name="price"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.price}
          />
          <div className="absolute right-0 p-5 bg-[#00000022] -top-3 rounded-sm h-16">
            <CiMoneyBill className="text-custom-yellow text-2xl" />
          </div>
        </fieldset>
        {errors.price && touched.price && (
          <p className="font-bold text-red-500">{errors.price}</p>
        )}
        <fieldset
          className={
            errors.date && touched.date
              ? "border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative"
              : "border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative"
          }
        >
          <legend className="text-lg tracking-wide">Date</legend>
          <input
            className="p-3 w-full"
            type="date"
            name="date"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.date}
          />
          <div className="absolute right-0 p-5 bg-[#00000022] -top-3 rounded-sm h-16">
            <BsCalendar2Date className="text-custom-yellow text-2xl" />
          </div>
        </fieldset>
        {errors.date && touched.date && (
          <p className="font-bold text-red-500">{errors.date}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="p-4 w-full text-white text-lg rounded-md rgb-add"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateReminder;
