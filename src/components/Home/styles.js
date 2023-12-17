import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: "15px",
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "rgba(0, 183, 255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
  con: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  appBarSearch: {
    borderRadius: "4px",
    marginBottom: "1rem",
    display: "flex",
    padding: "16px",
  },
  pagination: {
    borderRadius: "4px",
    marginTop: "1rem",
    padding: "16px",
  },
}));
