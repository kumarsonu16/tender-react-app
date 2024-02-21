import React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { Formik } from "formik";
import axios from "axios";

import RegisterationForm from "./RegisterationForm";
import { validationSchema, initialValues } from "./validationSchema";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}));

export default function Register(props) {
  const classes = useStyles();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/vehicles/registser", data);
      console.log("response", response);
      if (response.status === 200) {
         props.handleChange(null, "showvihcles", response.data );
      }
    } catch (error) {
      
      console.log("onSubmit error", error);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Register Vehicle
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => <RegisterationForm {...props} />}
        </Formik>
      </div>
    </Container>
  );
}
