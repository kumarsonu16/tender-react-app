import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import TextInput from "../../components/InputComponents/TextInput";
import useStyles from "./maintenanceStyle";

const VehicleSerachForm = (props) => {
  const classes = useStyles();
  const {
    values: { vehicleId },
    handleSubmit,
    isValid,
  } = props;
  console.log("props--------------------------------", props);
  

  return (
    <Container>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <Grid container xs={6} spacing={2} item>
          <TextInput
            {...props}
            label={"Vehicle Id"}
            name="vehicleId"
            value={vehicleId}
            required={true}
          />
        </Grid>
        <Grid xs={6} spacing={2} item>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={isValid ? classes.submit : classes.disabled}
            disabled={!isValid}
          >
          Search
        </Button>
          </Grid>
       
      </form>
    </Container>
  );
};

export default VehicleSerachForm;
