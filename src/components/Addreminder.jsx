import { useFormik } from "formik";
import { reminderSchema } from "../schemas";
import { BsCalendar2Date } from "react-icons/bs";
import { CiMoneyBill } from "react-icons/ci";
import { TfiWrite } from "react-icons/tfi";
import  axios  from "axios";
import ToggleState from "../hooks/ToggleState";
import Sucessmess from './Sucessmess'


const Addreminder = () => {
  const [showSuccessText , setShowSuccessText] = ToggleState()
  const onSubmit = async(values , {resetForm} ) => {
    const response = await axios.post('http://localhost:3000/api/reminders/createReminder' , values);
    setShowSuccessText(true)
    setTimeout(() => {
      resetForm();
      setShowSuccessText(false)
    }, 5000);
    console.log("submitted");
    console.log(response)

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
    <div className="self-start w-[70%] mx-auto">
        {
       showSuccessText && <Sucessmess success={showSuccessText} sucessMessage='Successfully Added'/>
    }
      
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-8 items-start justify-start w-full"
      >

        <div className="text-center w-full">
          <p className="text-4xl mb-5">Add Reminder</p>
          <input
           className={errors.title && touched.title ?  'border-2 border-red-500 bg-white p-6 rounded-full w-64 add-exp-input text-center text-black' : 'bg-white p-6 rounded-full w-64 add-exp-input text-center text-black'}
            type="text"
            placeholder="Title"
            name="title"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.title}
          />
            {errors.title && touched.title && <p className='font-bold text-red-500'>{errors.title}</p>}
        </div>
        <fieldset  className={errors.content && touched.content ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative'}>
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

        {errors.content && touched.content && <p className='font-bold text-red-500'>{errors.content}</p>}

        <fieldset className={errors.price && touched.price ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative' } >
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
        {errors.price && touched.price && <p className='font-bold text-red-500'>{errors.price}</p>}
        <fieldset className={errors.date && touched.date ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative'}>
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
        {errors.date && touched.date && <p className='font-bold text-red-500'>{errors.date}</p>}
        <button type="submit" disabled={isSubmitting} className="p-4 w-full text-white text-lg rounded-md rgb-add">
          Save
        </button>
      </form>
    </div>
  );
};

export default Addreminder;
