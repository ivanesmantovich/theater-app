import React from 'react';
import { Formik, Form } from 'formik';
import TextField from './TextField';

type signUpFormType = {};

export const SignUpForm = ({}: signUpFormType) => {
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
        >
          {(formik) => (
            <div>
              <Form>
                <TextField name="name" type="text" placeholder='Your Name' />
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignUpForm;
