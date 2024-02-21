import React, {useEffect, useState} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { Formik } from "formik";
import axios from "axios";
import VehicleSerachForm from "./VehicleSerachForm";
import { validationSchema, initialValues } from "./validationSchema";
import ShowMaintenanceDetails from "./ShowMaintenanceDetails";
import Loader from "../../components/Loader";

const useStyles = makeStyles((theme) => {
  return {
    paper: {
      marginTop: theme.spacing(5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    actions: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
  };
});

export default function Maintenance(props) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchData = async (vehicleId='') => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/vehicles/maintenance${vehicleId ? "/" + vehicleId : ""}`);
      console.log("response", response);
      if (response.status === 200) {
        setData(response.data);
      } else if (response.status === 204) {
        setData([]);
      }
      setError("");
    } catch (error) {
      setData([]);
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

   const onSubmit = (data) => {
     setLoading(true);
     fetchData(data.vehicleId);
   };

  return (
    <Container component="main">
      <CssBaseline />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(props) => <VehicleSerachForm {...props} />}
      </Formik>
      
      <div className={classes.paper}>
        {renderContent({error, data, loading})}
      </div>
    </Container>
  );
}


const renderContent = ({error, data, loading}) => {
  if (loading) {
    return <Loader /> ;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data && !data.length) {
    return <div>No data found.</div>;
  }
  return <ShowMaintenanceDetails data={data} />
};
