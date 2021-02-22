import React from "react";
import { useForm } from "react-hook-form";
import {
  CLabel,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
} from "@coreui/react";

const ViewStatus = () => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <CForm>
        <CCard>
          <CCardHeader>
            Check placement status
            {/* <small> validation feedback</small> */}
          </CCardHeader>
          <CCardBody>
            <CFormGroup>
              <CLabel htmlFor="inputIsValid">Enter Xth Percentage</CLabel>
              <CInput ref={register} valid id="inputIsValid" />
              <CValidFeedback>Cool! Input is valid</CValidFeedback>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="inputIsInvalid">Enter XIIth Percentage</CLabel>
              <CInput ref={register} invalid id="inputIsInvalid" />
              <CInvalidFeedback>Houston, we have a problem...</CInvalidFeedback>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="inputIsInvalid">Enter current CGPA</CLabel>
              <CInput ref={register} invalid id="inputIsInvalid" />
              <CInvalidFeedback>Houston, we have a problem...</CInvalidFeedback>
            </CFormGroup>
          </CCardBody>
        </CCard>
      </CForm>
    </>
  );
};

export default ViewStatus;
