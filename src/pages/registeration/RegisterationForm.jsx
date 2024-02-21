import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import TextInput from "../../components/InputComponents/TextInput";
import SelectInput from "../../components/InputComponents/SelectInput";
import { VehicleStatus } from "../../constants";

import useStyles from "./registerationFormStyle";

const RegisterationForm = (props) => {
  const classes = useStyles();
  const {
    values: { model, type, status },
    handleSubmit,
    isValid,
  } = props;
  
  return (
    <Container className="py-4">
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <TextInput
            {...props}
            label={"Model Number"}
            name="model"
            value={model}
            required={true}
          />
          <TextInput
            {...props}
            label="Type of Vehicle"
            name="type"
            value={type}
            required={true}
          />
          <SelectInput
            {...props}
            label="Status of Vehicle*"
            name="status"
            value={status}
            required={true}
            options={[
              { value: VehicleStatus.active, label: "Active" },
              { value: VehicleStatus.maintenance, label: "Maintenance" },
            ]}
          />
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          disabled={!isValid}
          style={{ marginTop : "20px" }}
        >
          Register
        </Button>
      </form>
    </Container>
  );
};

export default RegisterationForm;
