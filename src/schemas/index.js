import * as yup from "yup";


export const expenseSchema = yup.object().shape({

	expense : yup.number().positive("Positive Number Only!").integer("Numbers Only!").required("Required."),
	category : yup.string().required("Required.") , 
	date : yup.string().required("Required.") ,
})

export const reminderSchema = yup.object().shape({
	title : yup.string().required("Required.") ,
	content : yup.string().required("Required.") ,
	price : yup.number().required("Required.").positive('Positive Number Only!').integer('Numbers Only!') ,
  date : yup.string().required("Required.")
});


const passwordMatcher = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/;
export const loginSchema = yup.object().shape({
  username: yup.string()
    .required("Required")
    .max(25, 'Username must be at most 25 characters')
    .min(4, 'Username must be at least 4 characters'),
  password: yup.string()
    .required("Required")
    .max(100)
    .min(4, 'Password must be at least 4 characters')
    .matches(passwordMatcher, "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character")
});

export const signupSchema = yup.object().shape({
		
	username: yup.string()
    .required("Required")
    .max(25, 'Username must be at most 25 characters')
    .min(4, 'Username must be at least 4 characters'),
	password: yup.string()
    .required("Required")
    .max(25)
    .min(4, 'Password must be at least 4 characters')
    .matches(passwordMatcher, "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character")

})

export const incomeSchema = yup.object().shape({
    
   income :  yup.number().required("Required.").positive('Positive Number Only!').integer('Numbers Only!') ,
})