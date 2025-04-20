import React, { useCallback } from 'react';
import { Formik, Form, Field } from 'formik';

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
    const handleSubmit = useCallback((values) => {
    console.log('Submitted values:', values);
  }, []);
  return (
  <div>
    <h1>Оставить отзыв</h1>
    <Formik
      initialValues={{
        feedback: 'Тема...',
        text: 'Текст...',
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched}) => (
        <Form>
          <Field name="feedback" validate={validateFeedback} />
          {errors.feedback && touched.feedback && <div>{errors.feedback}</div>}

          <Field name="text" validate={validateText} />
          {errors.text && touched.text && <div>{errors.text}</div>}

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>                                      
  </div>
);
}

 
export default Feedback_form;