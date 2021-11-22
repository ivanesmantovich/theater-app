import React from 'react';
import { Formik, Form, Field, useField, FieldAttributes } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { Prisma } from '.prisma/client';
import axios from 'axios';
import { fetcher } from '../utils/fetcher';
// import { useQuery, useMutation, QueryCache } from 'react-query';

type MyRadioProps = { label: string } & FieldAttributes<{}>; // FieldAttributes для того чтобы передавать пропы в кастомный компонент

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <FormControlLabel {...field} control={<Radio />} label={label} /> // {...field} вставит value={field.value} onChange={field.onChange} и все остальные параметры принадлежащие field
  );
};

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      variant="outlined"
      fullWidth
      label={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      type={props.type}
    />
  );
};

type signUpFormType = {};

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  age?: number;
  gender?: 'm' | 'f' | 'o';
}

export const SignUpForm = ({}: signUpFormType) => {
  // Validation
  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    firstName: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(30, 'Must be 30 characters or less')
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
  // Validation

  const initialValues: SignUpFormValues = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <>
      <header>
        <h2 className={'text-6xl text-purple-700 font-semibold'}>Sign Up</h2>
      </header>

      <div className={'mt-10'}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (data, { setSubmitting }) => {
            // Вызывается на сабмите формы, в data содержатся поля на момент сабмита
            setSubmitting(true);
            // Делаю async вызов/реквест
            const userData: Prisma.UserCreateInput = {
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              password: data.password,
              age: data.age,
              gender: data.gender,
            };
            await fetcher('/api/create', { user: userData });
            // Делаю async вызов/реквест
            setSubmitting(false);
            console.log('submit:', data);
          }}
          validationSchema={validationSchema}
        >
          {(
            { values, isSubmitting } // В values передается обьект с текущим состояним формы
          ) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <MyTextField placeholder="First Name" name="firstName" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <MyTextField placeholder="Last Name" name="lastName" />
                </Grid>
                <Grid item xs={12}>
                  <MyTextField placeholder="Email" name="email" />
                </Grid>
                <Grid item xs={12}>
                  <MyTextField
                    placeholder="Password"
                    name="password"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MyTextField
                    placeholder="Confirm password"
                    name="confirmPassword"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MyTextField placeholder="Age" name="age" type="number" />
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <MyRadio
                      name="gender"
                      value="m"
                      type="radio"
                      label="Male"
                    />
                  </div>
                  <div>
                    <MyRadio
                      name="gender"
                      value="f"
                      type="radio"
                      label="Female"
                    />
                  </div>
                  <div>
                    <MyRadio
                      checked={true}
                      name="gender"
                      value="o"
                      type="radio"
                      label="Other"
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    disableElevation
                    size="large"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
              {/*Показывать текущее содержание полей*/}
              {/*<pre>{JSON.stringify(values, null, 2)}</pre>*/}
              {/*Показывать текущее содержание полей*/}
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default SignUpForm;
