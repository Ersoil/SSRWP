import React, { useCallback, useContext, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import "./feedback_form.css";
import { ThemeContext } from '../../../App';
import { useDispatch } from 'react-redux';
function validateFeedback(value) {
  let error;
  if (!value) {
    error = 'Required';}
  return error;
}

function validateText(value) {
  let error;
  if (!value) {
    error = 'Required';}
  else if (value.lenght<10) {
    error = 'Слишком мало';
  }
  return error;
}


export const Feedback_form= () =>{
    let dispatch = useDispatch()
    let theme = useContext(ThemeContext)
    const handleSubmit = useCallback((values) => {
      dispatch({type: "addfeedback", element: values})
  }, []);

  return (
  <div>
    
    <Formik
      initialValues={{
        feedback: 'Тема...',
        text: 'Текст...',
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched}) => (
        <Form className={"form_"+theme} >
          <h1 className={"formhead_"+theme} >Оставить отзыв</h1>
          <Field className={"field_"+theme} name="feedback" validate={validateFeedback} />
          {errors.feedback && touched.feedback && <div>{errors.feedback}</div>}

          <Field className={"fieldtext_"+theme} type="text" name="text" validate={validateText} />
          {errors.text && touched.text && <div>{errors.text}</div>}

          <button className={"submit_"+theme}  type="submit">Submit</button>
        </Form>
      )}
    </Formik>                                      
  </div>
);
}

 
export default Feedback_form;