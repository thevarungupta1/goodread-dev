import React, { useState } from 'react';
import styles from "./styles.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginPage = () => {

  const [responseData, setResponseData] = useState({
    responseText: "",
    responseClass: "",
  });

  const initialValues = {
    email: '',
    password: ''
  };
  const onSubmit = (values) => {
    axios.post('https://orca-app-jhg4l.ondigitalocean.app/api/auth/login', values)
    .then((response) => {
      // console.log(response.data);
      localStorage.setItem('token', response.data.token)
      setResponseData({
        responseText: "Login Successful, thank you",
        responseClass: "alert alert-success",
      });
    }, (error) => {
      //console.log(error)
      setResponseData({
        responseText: "login failed, try again",
        responseClass: "alert alert-danger",
      });
    })
    .catch(error => console.log(error))
  };

  const validationSchema = Yup.object({
    email: Yup.string()
    .email("Must be a valid email")    
    .required("Email is required"),
    password: Yup.string()
    .min(6, 'password must be at least 6 characters')
    .required("Password is required")
  })


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className={styles.wrapper}>
          <div class={responseData.responseClass} role="alert">
              {responseData.responseText}
            </div>
            <h2>Login</h2>
            <hr />
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <Field type="text" name="email" className="form-control" />
                  <ErrorMessage name="email">
                    {(errorMessage) => (
                      <small className="text-danger">{errorMessage}</small>
                    )}
                  </ErrorMessage>
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage name="password">
                    {(errorMessage) => (
                      <small className="text-danger">{errorMessage}</small>
                    )}
                  </ErrorMessage>
                </div>

                <input
                  type="submit"
                  value="Loigin"                  
                  className="btn btn-primary btn-block"
                />
              </Form>
            </Formik>
            <br />
            <p className="text-center">
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;
