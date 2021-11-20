import React from 'react';
import { ErrorMessage, FieldHookConfig, useField } from 'formik';

const TextField = (props: FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-5">
      <label
        className={'flex flex-col font-semibold'}
        style={{ textTransform: 'capitalize' }}
        htmlFor={field.name}
      >
        {field.name}
      </label>
      <input
        className={`bg-gray-100 border-b-2 outline-none mr-3 ${
          meta.touched && meta.error ? 'border-red-700' : 'border-gray-700'
        }`}
        {...field}
        type={props.type}
      />
      <ErrorMessage component="div" name={field.name} />
    </div>
  );
};

export default TextField;
