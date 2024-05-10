import React from 'react';
import { z } from 'zod';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { getInputProps, getFormProps } from '@conform-to/react';

const FormSchema = z.object({
  firstName: z.string().min(5, { message: 'First name is too short' }),
  lastName: z.string().min(5, { message: 'Last name is too short' }),
  address: z.string().min(5, { message: 'Ae is too short' }),
  city: z.string().min(2, { message: 'City is too short' }),
  state: z.string().min(2, { message: 'State is too short' }),

})

export function useFormData() {
  const [successMessage, setSuccessMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const [form,fields] = useForm({
    id: 'user',
    shouldValidate: 'onBlur',
    onSubmit(e, { submission }:any) {
      e.preventDefault();
      const { payload, status } = submission;
      if (status === 'success') {
        console.log('PAYLOAD -->',payload)
        setErrorMessage('');
        form.reset();
      }
      if (status === 'failure') {
        setErrorMessage('Unable to validate');
        setSuccessMessage('')
      }
    },
    onValidate({ formData }) {
      return parseWithZod(formData, {schema:FormSchema})
    }
  })

  return [
    {
      form,
      fields,
      successMessage,
      errorMessage,
      formProps: getFormProps(form),
    },
    {
      getInputProps,
      getFormProps
    }
  ];
}
