import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export const Signup = () => {
    
    const validate = Yup.object({
        FirstName: Yup.string()
        .max(15,"Must contain 15 or less characters")
        .required("Required"),

        LastName: Yup.string()
        .max(15,"Must contain 15 or less characters")
        .required("Required"),

        Email : Yup.string().email("Not a valid email")
        .required("Required"),

        Password: Yup.number("Password must contain only numbers")
        .min(6,"Password must contain atleast 6 digits")
        .required("Required"),

        ConfirmPassword: Yup.number()
        .oneOf([Yup.ref('Password'),null],"Password not matching")
    })
    
    return(
        <Formik 
            initialValues= {{
            FirstName:"",
            LastName:"",
            Email:"",
            Password:"",
            ConfirmPassword:""

        }}
            validationSchema = {validate}

            onSubmit = {values => {
            console.log(values)
        }}
        >
            
            {
                ()=>(
                    <Form>
                         <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor="FirstName">First Name:</label>
              <Field className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="text" id="FirstName" name="FirstName" />
              <ErrorMessage className = 'text-sm text-red-800' name="FirstName" component="div" />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor="LastName">Last Name:</label>
              <Field className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="text" id="LastName" name="LastName" />
              <ErrorMessage className = 'text-sm text-red-800' name="LastName" component="div" />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor="Email">Email:</label>
              <Field className ='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="email" id="Email" name="Email" />
              <ErrorMessage className = 'text-sm text-red-800' name="Email" component="div" />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor="Password">Password:</label>
              <Field className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="password" id="Password" name="Password" />
              <ErrorMessage className = 'text-sm text-red-800' name="Password" component="div" />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700' htmlFor="ConfirmPassword">Confirm Password:</label>
              <Field className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' type="password" id="ConfirmPassword" name="ConfirmPassword" />
              <ErrorMessage className = 'text-sm text-red-800' name="ConfirmPassword" component="div" />
            </div>

            <button onClick={()=>{
                alert("Form Submitted Successfully!!")
            }} className='my-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' type="submit">Submit</button>
                    </Form>
                )
            }
            

            

            
        </Formik>

    )
};
  