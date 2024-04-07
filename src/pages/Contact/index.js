import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './Contact.module.css'

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
      // eslint-disable-next-line
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
      <div className={styles.container}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <form className={styles.form}onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>Full name:</label>
        <input className={styles.inputField} {...register('fullName')} />
        <p className={styles.errorMessage}>{errors.fullName?.message}</p>
        <label className={styles.label}>Subject:</label>
        <input className={styles.inputField} {...register('subject')} />
        <p className={styles.errorMessage}>{errors.subject?.message}</p>
        <label className={styles.label}>E-mail address:</label>
        <input className={styles.inputField} {...register('eMail')} />
        <p className={styles.errorMessage}>{errors.eMail?.message}</p>
        <label className={styles.label}>Message:</label>
        <textarea className={styles.message} {...register('body')} />
        <p className={styles.errorMessage}>{errors.body?.message}</p>
        <input className={styles.button}type='submit' />
      </form>
      </div>
    )
  }

  export default Contact;