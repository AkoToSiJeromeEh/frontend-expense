import React from 'react'
import { useFormik } from 'formik';
import {incomeSchema} from '../schemas'
import ToggleState from '../hooks/ToggleState';
import  axios  from "axios";
import Sucessmess from './Sucessmess'
const Addincome = () => {
  const [sucessIncome , setsucessIncome] = ToggleState()

  const onSubmit = async(values , {resetForm}) => {
     const response = await axios.post('http://localhost:3000/api/incomes/createIncome' , values)
     setsucessIncome(true)
     setTimeout(() => {
       resetForm()
       setsucessIncome(false)
     },2000)
     console.log(response);
     console.log('submitted');
  }
  const {values , handleBlur , handleChange , handleSubmit , errors , touched , isSubmitting } = useFormik({
    initialValues: {
 
      income:  ""
    },
    validationSchema : incomeSchema,
    onSubmit,
  });
  return (
    <>
     {
       sucessIncome && <Sucessmess success={sucessIncome} sucessMessage='Successfully Added' />
    }
 
    <div className="self-start w-[70%] mx-auto flex  items-center justify-center ">

    <form
      onSubmit={handleSubmit}
      method="post"
      className="flex flex-col gap-8 items-start justify-start w-full"
    >
      <div className="text-center w-full ">
        <p className="text-4xl mb-5">Add Income</p>
        <input
          className={errors.income && touched.income ?  'border-2 border-red-500 bg-white p-6 w-64 rounded-full  add-exp-input text-center text-black' : 'bg-white p-6  w-64 rounded-full add-exp-input text-center text-black'}
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.income}
          placeholder="0" 
          name="income" 
        />
        {errors.income && touched.income && <p className='font-bold text-red-500'>{errors.income}</p>}
      </div>
   
      <button disabled={isSubmitting}  type="submit" className="p-4  add-exp-btn text-white text-lg rounded-md rgb-add w-full self-center">
        Add Income
      </button>
    </form>
  </div>
  </>
  )
}

export default Addincome