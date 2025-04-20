import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';

function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}


function validatePassword(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
}

export const Login = () => {
  const handleSubmit = useCallback((values) => {
    console.log('Submitted values:', values);
  }, []);
  return (
    <div>
      <h1>Авторизация</h1>
      <Formik
        initialValues={{
          email: 'example@mail.com',
          password: 'password',
        }}
        onSubmit={handleSubmit} 
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" validate={validateEmail} />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="password">Пароль</label>
              <Field name="password" type="password" validate={validatePassword} />
              {errors.password && touched.password && <div>{errors.password}</div>}
            </div>

            <button type="submit">Отправить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;