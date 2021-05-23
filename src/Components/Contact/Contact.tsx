import axios from 'axios';
import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import * as Yup from 'yup';

import { DoubleAngle } from '../DoubleAngle/DoubleAngle';
import styles from './Contact.module.scss';
import { Error } from './Errors';
import Input from './Input';
import TextArea from './TextArea';

const errorMessages = [
  'To pole jest wymagane. Minimalna liczba znaków: 5',
  'Podany adres E-mail jest nieprawidłowy',
  'To pole jest wymagane. Minimalna liczba znaków: 10',
];

const Contact: FC = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.contactHeader}>
        <h2 className={styles.contactTitle}>Kontakt</h2>
      </div>
      <div className={styles.contactBackground}>
        <div className={styles.contactSection}>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={Yup.object().shape({
              name: Yup.string().min(5).required(),
              email: Yup.string().email().required(),
              message: Yup.string().min(10).required(),
            })}
            onSubmit={async (
              values,
              { resetForm, setStatus, setErrors, setSubmitting }
            ) => {
              setStatus({ success: false });
              const appURL = 'https://server-nodemailer.herokuapp.com/send';
              try {
                axios({
                  method: 'POST',
                  url: appURL,
                  data: {
                    name: values.name,
                    email: values.email,
                    message: values.message,
                  },
                });
                resetForm();
                setStatus({ success: 'Wiadomość została wysłana' });
                setSubmitting(false);
              } catch (error) {
                setStatus({ success: 'Coś poszło nie tak.' });
                setSubmitting(false);
                // setErrors({ submit: error.message });
              }
            }}
            render={props => (
              <Form className={styles.contactForm}>
                {props.errors.name && (
                  <Error
                    touched={!!props.touched.name}
                    name={props.errors.name}
                    content={errorMessages[0]}
                  />
                )}
                <Input
                  name="name"
                  placeholder="Podaj imię i nazwisko"
                  value={props.values.name}
                  onChange={props.handleChange}
                />
                {props.errors.email && (
                  <Error
                    touched={!!props.touched.email}
                    name={props.errors.email}
                    content={errorMessages[1]}
                  />
                )}
                <Input
                  name="email"
                  placeholder="Wprowadź adres e-mail"
                  value={props.values.email}
                  onChange={props.handleChange}
                />
                {props.errors.message && (
                  <Error
                    touched={!!props.touched.message}
                    name={props.errors.message}
                    content={errorMessages[2]}
                  />
                )}

                <TextArea
                  name="message"
                  placeholder="Treść wiadomości..."
                  value={props.values.message}
                  onChange={props.handleChange}
                />
                <div className={styles.buttonsContainer}>
                  <input
                    className={styles.formButton}
                    type="reset"
                    value="Wyczyść formularz"
                  />
                  <input
                    className={styles.formButton}
                    type="submit"
                    value="Wyślij"
                  />
                </div>
                {props.status ? (
                  <div className={styles.confirmationContainer}>
                    <p className={styles.confirmationMessage}>
                      {props.status.success}
                    </p>
                  </div>
                ) : (
                  ''
                )}
              </Form>
            )}
          />
        </div>
        <DoubleAngle onUp={true} subPage="projects" />
      </div>
    </section>
  );
};

export default Contact;