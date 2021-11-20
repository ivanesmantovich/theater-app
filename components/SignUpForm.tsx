import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup';

type signUpFormType = {};

export const SignUpForm = ({}: signUpFormType) => {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    name: Yup.string()
      .max(40, 'Must be 40 characters or less')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
    gender: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    age: Yup.number(),
  });
  return (
    <>
      <header>
        <h2 className={'text-6xl text-purple-700 font-semibold'}>Sign Up</h2>
      </header>

      <div className={'mt-10'}>
        <Formik
          initialValues={{
            email: '',
            name: '',
            password: '',
            gender: '',
            age: '',
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(props) => (
            // <div>
            <Form onSubmit={props.handleSubmit}>
              <TextField name="email" type="email" />
              <TextField name="name" type="text" />
              <TextField name="password" type="password" />
              <TextField name="confirmPassword" type="password" />
              <TextField name="gender" type="text" />
              <TextField name="age" type="number" />
              <button
                type="submit"
                className="font-bold uppercase bg-purple-700 hover:bg-purple-900 text-gray-50 rounded-full py-2 px-3 cursor-pointer tracking-wider"
              >
                Register
              </button>
            </Form>
            // </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignUpForm;
