import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  fullName: yup
    .string()
    .min(3, 'Your name must be at least three characters long')
    .required('Please enter your full name'),
  subject: yup
    .string()
    .min(3, 'Your subject must be at least 3 characters long')
    .required('Your message must have a subject'),
  eMail: yup
    .string()
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
       'Please enter a valid e-mail address')
    .required('An e-mail address is required'),
  body: yup
    .string()
    .min(3, 'Your message must be at least three characters')
    .required('Your message needs a message')


})

function Contact() {
    const { register, handleSubmit,
    formState: { errors },
    } = useForm({
      resolver:yupResolver(schema)
    });

    function onSubmit(data) {
      console.log(data)
    }


    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('fullName')} />
        <p>{errors.fullName?.message}</p>
        <input {...register('subject')} />
        <p>{errors.subject?.message}</p>
        <input {...register('eMail')} />
        <p>{errors.eMail?.message}</p>
        <input {...register('body')} />
        <p>{errors.body?.message}</p>
        <input type='submit' />
      </form>
    )
  }

  export default Contact;