import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

export default function SelectInput(props) {
  const {
    name,
    handleChange,
    handleBlur,
    errors,
    touched,
    label,
    grid = 12,
    value = "active",
    required = false,
    options =[],
  } = props;
  return (
    <Grid xs={grid} item >
      <FormControl sx={{ m: 1, minWidth: 348 }} size="medium" style={{ margin: 0}}>
        <InputLabel id="demo-select-small-label">{label}</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={value}
          label={label}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched[name] && Boolean(errors[name])}
          helpertext={touched[name] ? errors[name] : ""}
          required={required}
        >
          {
            options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
          {/* <MenuItem value={"active"}>options</MenuItem>
          <MenuItem value={"maintenance"}>Maintenance</MenuItem> */}
        </Select>
      </FormControl>
    </Grid>
  );
}
