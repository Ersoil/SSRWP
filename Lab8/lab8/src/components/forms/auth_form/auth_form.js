import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import "./auth_form.css";
import axios from 'axios';

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
    axios.get('http://localhost:8000/users')
    .then(response=>
      {
        console.log("Пользователи:", response.data)
        let count_sov =0
        for(let i=0; i<response.data.length;i++){
            let element = response.data[i];
           if(element.Email==localStorage.getItem("login"))
           {
              count_sov++;
              break;
           }
        };
        if(count_sov==0){
          values = {
            email: localStorage.getItem("login"),
            name: "Guest",
            type: "User"
          }
         axios.post('http://localhost:8000/users', values)
         .then(response=>
          {
            console.log("Создан новый пользователь", response.data)
          }
         )
        }

      }
    )
    .catch(error=>
      {
      console.log("Ошибка проверки пользователя:",error)
      }
    )
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