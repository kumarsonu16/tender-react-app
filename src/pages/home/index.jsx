import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import axios from "axios";
import ShowVehicles from "./ShowVehicles";
import ActionTabs from "../../components/Tabs";
import Registeration from "../registeration";
import Maintenance from "../maintenance";
import Analytics from "../analytics";
import useStyles from "./homeStyle";
import Loader from "../../components/Loader";

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = useState("showvihcles");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleChange = (event, newValue, data) => {
    // this code is for not fetching the data every time the resgistered new vechicle
    if (newValue === "showvihcles" && data) {
      setData((previousData) => [...previousData, data]);
    }
    setValue(newValue);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/v1/vehicles`);
      setData(response.data);
      if (response.status === 200) {
        setData(response.data);
      } else if (response.status === 204) {
        setData([]);
      }
      setError("");
    } catch (error) {
      console.log("error", error);
      setData([]);
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.actions}>
        <ActionTabs value={value} handleChange={handleChange} />
      </div>
      <div className={classes.paper}>
       {renderContent({error, data, loading, handleChange, value})}
      </div>
    </Container>
  );
}

const renderTabComponent = (props) => {
  if (props.value === "showvihcles") {
    return <ShowVehicles data={props.data} />;
  } else if (props.value === "registeration") {
    return <Registeration handleChange={props.handleChange} />;
  } else if (props.value === "maintenance") {
    return <Maintenance />;
  } else if (props.value === "analytics") {
    return <Analytics />;
  }
};

const renderContent = ({error, data, loading, value, handleChange}) => {
  if (loading) {
    return <Loader /> ;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data && !data.length) {
    return <div>No data found.</div>;
  }
  return renderTabComponent({ value, data, handleChange })
};
