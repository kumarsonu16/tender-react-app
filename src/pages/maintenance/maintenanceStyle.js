import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
  },
  submit: {
    height: "100%",
    padding: "0 32px !important",
  },
  disabled: {
    height: "75%",
    padding: "0 32px !important",
  },
}));

export default useStyles;
