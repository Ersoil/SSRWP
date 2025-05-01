import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import "./auth_form.css";

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

export const useLoginState = () =>{
  const isLoggedIn = useSelector((state)=>state.login);
  return Boolean(isLoggedIn);
}

export const Login = () => {
  let dispatch = useDispatch();
  const handleSubmit = useCallback((values) => {
    localStorage.setItem("login",values.email);
    localStorage.setItem("password",values.password);
    dispatch({type: "login"})
    console.log(localStorage.getItem("login"))
  }, []);
  return (
    <div>
      <Formik
        initialValues={{
          email: 'example@mail.com',
          password: 'password',
        }}
        onSubmit={handleSubmit} 
      >
        {({ errors, touched }) => (
          <Form className="form">
            <h1 className="formhead">Авторизация</h1>
            <div>
              <label cl htmlFor="email">Email</label>
              <Field className="field" name="email" validate={validateEmail} />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>

            <div>
              <label htmlFor="password">Пароль</label>
              <Field  className="field" name="password" type="password" validate={validatePassword} />
              {errors.password && touched.password && <div>{errors.password}</div>}
            </div>

            <button className="submit" type="submit">Отправить</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;