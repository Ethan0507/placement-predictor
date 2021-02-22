import React from 'react'
import { useHistory } from 'react-router-dom';

import { useFormik } from 'formik'
import * as Yup from 'yup'

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import firebaseApp from '../../../FirebaseConfig';

// const admin = require('firebase-admin');
// admin.initializeApp();


const validationSchema = Yup.object({
  username: Yup.string().required("Username Required!"),
  password: Yup.string().required("Password required!")
});

const Login = () => {

  const history = useHistory();

  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema,
    onSubmit(values, actions) {
      firebaseApp.auth().signInWithEmailAndPassword(values.username + '@crce.in', values.password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        localStorage.setItem("token", user);
        history.push('/dashboard');
        // admin.auth().getUserByEmail(values.username +'@crce.in').then(user => { 
        //   admin.auth().setCustomUserClaims(user.uid, {
        //     role: "student"
        //   }).then(() => {
        //     console.log("Success");
        //   }).catch(err => {
        //     console.log(err);
        //   })
        // })
      })
      .catch((error) => {
        actions.setSubmitting(false);
        actions.setErrors({ username: error.message, password: error.message });
      });
    }
  })

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput name="username" invalid={errors.username} type="text" placeholder="Username" autoComplete="username" value={values.username} onChange={handleChange}/>
                    </CInputGroup>
                    {errors.username ? <p style={{ color: "red" }}>{errors.username}</p> : null}
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput name="password" invalid={errors.password && touched.password} type="password" placeholder="Password" autoComplete="current-password" value={values.password} onChange={handleChange}/>
                    </CInputGroup>
                    {errors.password && touched.password ? <p style={{ color: "red" }}>{errors.password}</p> : null}
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" type="submit" className="px-4">Login</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Placement Predictor</h2>
                    <p>Tracking the porbability of your placements made easier than ever.</p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
