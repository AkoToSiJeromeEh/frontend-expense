import { TbCategory } from 'react-icons/tb';
import   {BsCalendar2Date } from 'react-icons/bs';
import { useFormik } from 'formik';
import {expenseSchema} from '../schemas'
import Sucessmess from './Sucessmess';
import ToggleState from '../hooks/ToggleState';
import  axios  from "axios";
const Addexpense = () => {
  
  const [sucessExpense , setSucessExpense] = ToggleState()

  const onSubmit = async(values , {resetForm}) => {
     const response = await axios.post('http://localhost:3000/api/expenses/createExpense' , values)
     setSucessExpense(true)
     setTimeout(() => {
       resetForm()
       setSucessExpense(false)
     },2000)
     console.log(response);
     console.log('submitted');
  }
  const {values , handleBlur , handleChange , handleSubmit , errors , touched , isSubmitting } = useFormik({
    initialValues: {
 
      expense:  "",
      category: " ",
      date : " ",
    },
    validationSchema : expenseSchema,
    onSubmit,
  });



  return (
    <div className="self-start w-[70%] mx-auto">

       {
       sucessExpense && <Sucessmess success={sucessExpense} sucessMessage='Successfully Added'/>
     }
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-8 items-start justify-start w-full"
      >
        <div className="text-center w-full">
          <p className="text-4xl mb-5">Add Expenses</p>
          <input
            className={errors.expense && touched.expense ?  'border-2 border-red-500 bg-white p-6 rounded-full w-64 add-exp-input text-center text-black' : 'bg-white p-6 rounded-full w-64 add-exp-input text-center text-black'}
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.expense}
            placeholder="0" 
            name="expense" 
          />
          {errors.expense && touched.expense && <p className='font-bold text-red-500'>{errors.expense}</p>}
        </div>
        <fieldset className={errors.category && touched.category ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative'}>
          <legend className="text-lg tracking-wide">Category</legend>
          <input
            className= 'p-3 w-full outline-none'
            type="text"
            name="category" 
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}   
          />

          <div className="absolute right-0 p-5 bg-[#0000003a] -top-3 rounded-sm h-16">
            <TbCategory className='text-custom-yellow text-2xl' />
          </div>
        </fieldset>
        {errors.category && touched.category && <p className='font-bold text-red-500'>{errors.category}</p>}
        <fieldset className={errors.date && touched.date ? 'border-2 border-red-500 w-full ps-2 pb-1 rounded-md text-start relative' : 'border-2 border-[#c6b6fb] w-full ps-2 pb-1 rounded-md text-start relative'}>
          <legend className="text-lg tracking-wide">Today</legend>
          <input
            className='p-3 w-full outline-none' 
            type="date"
            name="date"
            value={values.date}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        
          <div className="absolute right-0 p-5 bg-[#0000003a] -top-3 rounded-sm h-16">
            <BsCalendar2Date className='text-custom-yellow text-2xl' />
          </div>
        </fieldset>
        {errors.date && touched.date && <p className='font-bold text-red-500'>{errors.date}</p>}
        <button disabled={isSubmitting}  type="submit" className="p-4 w-full add-exp-btn text-white text-lg rounded-md rgb-add">
          Save
        </button>
      </form>
    </div>
  );
};

export default Addexpense;
