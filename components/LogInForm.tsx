import React from 'react';
import { Formik, Form, Field, useField, FieldAttributes } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

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
  // Validation
  const validationSchema = Yup.object({
    email: Yup.string().email('Email is invalid').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  });
  // Validation

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
            // Делаю async вызов/реквест
            // ...
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
                  <Button
                    variant="contained"
                    disableElevation
                    size="large"
                    type="submit"
                  >
                    Log In
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

export default LogInForm;
