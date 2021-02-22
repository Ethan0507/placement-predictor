import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  CCol,
  CSelect,
  CCardFooter,
  CButton,
  CCardHeader,
  CCardBody,
  CCard,
  CFormGroup,
  CLabel,
  CInput,
  CInvalidFeedback,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import "./ViewStatus.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  xPercentage: Yup.number("Must be a number")
    .lessThan(100, "Please enter valid percentage!")
    .required("Required"),
  xiiPercentage: Yup.number("Must be a number")
    .lessThan(100, "Please enter valid percentage!")
    .required("Required"),
  degreePercentage: Yup.number("Must be a number")
    .required("Required")
    .lessThan(100, "Please enter valid percentage!"),
  etestP: Yup.number("Must be a number")
    .lessThan(100, "Please enter valid percentage")
    .required("Required"),
  mbaP: Yup.number("Must be a number")
    .lessThan(100, "Please enter valid percentage")
    .required("Required"),
  xiiBoard: Yup.string("Must be string").required("Required"),
  gender: Yup.string("Must be string").required("Required"),
  xBoard: Yup.string("Must be string").required("Required"),
  hscStream: Yup.string("Must be string").required("Required"),
  degreeT: Yup.string("Must be string").required("Required"),
  workex: Yup.string("Must be string").required("Required"),
  specialisation: Yup.string("Must be string").required("Required"),
  yearOfGrad: Yup.number("Must be a valid year").required("Required"),
});

const ViewStatus = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          gender: "",
          xPercentage: "",
          xiiPercentage: "",
          degreePercentage: "",
          etestP: "",
          mbaP: "",
          xiiBoard: "",
          gender: "",
          xBoard: "",
          specialisation: "",
          workex: "",
          hscStream: "",
          degreeT: "",
          yearOfGrad: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, values, touched }) => (
          <div>
            <CCard className="card-container">
              <CCardHeader>
                Check Placement Status
                {/* <small> validation feedback</small> */}
              </CCardHeader>
              <Form>
                <CCardBody>
                  <CFormGroup row>
                    <CCol xs="12" xl="4">
                      <CLabel htmlFor="name">Name</CLabel>
                      <Field
                        name="name"
                        invalid={!!errors.name}
                        as={CInput}
                        value={values.name}
                        placeholder="John Doe"
                      />
                      <CInvalidFeedback>
                        {!!errors.name && !!touched.name ? (
                          <div>{errors.name}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                    <CCol xs="12" xl="4">
                      <CLabel htmlFor="gender">Gender</CLabel>
                      <Field
                        id="select"
                        invalid={!!errors.gender && !!touched.gender}
                        name="gender"
                        as={CSelect}
                      >
                        <option value="">Select an option</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        {/* <option value="Others">Others</option> */}
                      </Field>
                      <CInvalidFeedback>
                        {errors.gender && touched.gender ? (
                          <div>{errors.gender}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                    <CCol xl="4">
                      <CLabel htmlFor="yearOfGrad">Graduation Year</CLabel>
                      <Field
                        id="select"
                        invalid={!!errors.yearOfGrad && !!touched.yearOfGrad}
                        name="yearOfGrad"
                        as={CSelect}
                      >
                        <option value="">Select a year</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2022">2023</option>
                        <option value="2023">2024</option>
                        <option value="2024">2025</option>
                        <option value="2025">2026</option>
                      </Field>
                      <CInvalidFeedback>
                        {errors.yearOfGrad && touched.yearOfGrad ? (
                          <div>{errors.yearOfGrad}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol xl="6">
                      <CLabel htmlFor="xPercentage">Xth Percentage</CLabel>
                      <Field
                        name="xPercentage"
                        invalid={!!errors.xPercentage && !!touched.xPercentage}
                        as={CInput}
                        value={values.xPercentage}
                        placeholder="0-100"
                      />
                      <CInvalidFeedback>
                        {errors.xPercentage && touched.xPercentage ? (
                          <div>{errors.xPercentage}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>

                    <CCol xl="6">
                      <CLabel htmlFor="xBoard">Xth Board</CLabel>
                      <Field
                        invalid={!!errors.xBoard && !!touched.xBoard}
                        name="xBoard"
                        as={CSelect}
                      >
                        <option value="">Select an option</option>
                        <option value="Central">Central</option>
                        <option value="Others">Others</option>
                      </Field>
                      <CInvalidFeedback>
                        {errors.xBoard && touched.xBoard ? (
                          <div>{errors.xBoard}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol xl="4">
                      <CLabel htmlFor="xiiPercentage">XIIth Percentage</CLabel>
                      <Field
                        name="xiiPercentage"
                        invalid={
                          !!touched.xiiPercentage && !!errors.xiiPercentage
                        }
                        as={CInput}
                        value={values.xiiPercentage}
                        placeholder="0-100"
                      />
                      <CInvalidFeedback>
                        {errors.xiiPercentage && touched.xiiPercentage ? (
                          <div>{errors.xiiPercentage}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                    <CCol xl="4">
                      <CLabel htmlFor="xiiBoard">XIIth Board</CLabel>
                      <Field
                        invalid={!!errors.xiiBoard && !!touched.xiiBoard}
                        name="xiiBoard"
                        as={CSelect}
                      >
                        <option value="">Select an option</option>
                        <option value="Central">Central</option>
                        <option value="Others">Others</option>
                      </Field>
                      <CInvalidFeedback>
                        {errors.xiiBoard && touched.xiiBoard ? (
                          <div>{errors.xiiBoard}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                    <CCol xl="4">
                      <CLabel htmlFor="hscStream">XIIth Stream</CLabel>
                      <Field
                        invalid={!!errors.hscStream && !!touched.hscStream}
                        name="hscStream"
                        as={CSelect}
                      >
                        <option value="">Select an option</option>
                        <option value="Science">Science</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts</option>
                      </Field>
                      <CInvalidFeedback>
                        {errors.hscStream && touched.hscStream ? (
                          <div>{errors.hscStream}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol xl="6">
                      <CLabel htmlFor="degreePercentage">
                        Enter Degree Percentage
                      </CLabel>
                      <Field
                        name="degreePercentage"
                        as={CInput}
                        invalid={
                          !!touched.degreePercentage &&
                          !!errors.degreePercentage
                        }
                        value={values.degreePercentage}
                        placeholder="0-100"
                      />
                      <CInvalidFeedback>
                        {errors.degreePercentage && touched.degreePercentage ? (
                          <div>{errors.degreePercentage}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                    <CCol xl="6">
                      <CLabel htmlFor="degreeT">Degree T</CLabel>
                      <Field
                        invalid={!!errors.degreeT && !!touched.degreeT}
                        name="degreeT"
                        as={CSelect}
                      >
                        <option value="">Select an option</option>
                        <option value="Sci&Tech">Science & Technology</option>
                        <option value="Comm&Mgmt">Commerce & Mgmt</option>
                        <option value="Others">Others</option>
                      </Field>
                      <CInvalidFeedback>
                        {errors.degreeT && touched.degreeT ? (
                          <div>{errors.degreeT}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol xl="6">
                      <CLabel htmlFor="workex">Work Experience</CLabel>
                      <Field
                        invalid={!!errors.workex && !!touched.workex}
                        name="workex"
                        as={CSelect}
                      >
                        <option value="">Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </Field>
                      <CInvalidFeedback>
                        {errors.workex && touched.workex ? (
                          <div>{errors.workex}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                    <CCol xl="6">
                      <CLabel htmlFor="etestP">Enter ETest Percentage</CLabel>
                      <Field
                        name="etestP"
                        invalid={!!touched.etestP && !!errors.etestP}
                        as={CInput}
                        value={values.etestP}
                        placeholder="0-100"
                      />
                      <CInvalidFeedback>
                        {errors.etestP && touched.etestP ? (
                          <div>{errors.etestP}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol xl="6">
                      <CLabel htmlFor="specialisation">Specialisation</CLabel>
                      <Field
                        invalid={
                          !!errors.specialisation && !!touched.specialisation
                        }
                        name="specialisation"
                        as={CSelect}
                      >
                        <option value="">Select an option</option>
                        <option value="Mkt&HR">Mkt&HR</option>
                        <option value="Mkt&Fin">Mkt&Fin</option>
                        <option value="Others">Others</option>
                      </Field>
                      <CInvalidFeedback>
                        {errors.specialisation && touched.specialisation ? (
                          <div>{errors.specialisation}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                    <CCol xl="6">
                      <CLabel htmlFor="mbaP">Enter MBA Percentage</CLabel>
                      <Field
                        name="mbaP"
                        invalid={!!touched.mbaP && !!errors.mbaP}
                        as={CInput}
                        value={values.mbaP}
                        placeholder="0-100"
                      />
                      <CInvalidFeedback>
                        {errors.mbaP && touched.mbaP ? (
                          <div>{errors.mbaP}</div>
                        ) : null}
                      </CInvalidFeedback>
                    </CCol>
                  </CFormGroup>
                </CCardBody>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="success">
                    <CIcon name="cil-scrubber" /> Submit
                  </CButton>
                  <CButton type="reset" size="sm" color="danger">
                    <CIcon name="cil-ban" /> Reset
                  </CButton>
                </CCardFooter>
              </Form>
            </CCard>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default ViewStatus;
