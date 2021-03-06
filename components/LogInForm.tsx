import React, { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, useField, FieldAttributes } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { auth } from '../ts/firestoreConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuthContext } from '../store/auth-context';

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

type logInFormType = {};

export const LogInForm = ({}: logInFormType) => {
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(FirebaseAuthContext);
  const userId = context.userId;
  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });

  useEffect(() => {
    if (userId !== null) window.location.href = '/';
  }, [userId]);

  return (
    <>
      <header>
        <h2 className={'text-6xl text-purple-700 font-semibold'}>Log In</h2>
      </header>
      <div className={'mt-10'}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(data, { setSubmitting }) => {
            // Вызывается на сабмите формы, в data содержатся поля на момент сабмита
            setSubmitting(true);
            setIsLoading(true);
            // Делаю async вызов/реквест
            signInWithEmailAndPassword(auth, data.email, data.password)
              .then((loggedInUser) => {
                console.log('user logged in:', loggedInUser.user);
              })
              .catch((error) => {
                console.log('Error Message:', error.message);
              });
            setSubmitting(false);
            setIsLoading(false);
            console.log('submit:', data);
          }}
          validationSchema={validationSchema}
        >
          {(
            { values, isSubmitting } // В values передается обьект с текущим состояним формы
          ) => (
            <Form>
              <Grid container spacing={2}>
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
                  {isLoading ? (
                    <p className="font-semibold text-xl">Loading...</p>
                  ) : (
                    <Button
                      variant="contained"
                      disableElevation
                      size="large"
                      type="submit"
                    >
                      Log In
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LogInForm;
