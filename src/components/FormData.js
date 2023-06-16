// // import React from "react";

// // import TextField from "@mui/material/TextField";

// // export default function FormData() {
// //   return (
// //     <div>
// //       <TextField
// //         label="Dense"
// //         id="outlined-margin-dense"
// //         defaultValue=""
// //         helperText=""
// //         margin="dense"
// //         variant="outlined"
// //       />
// //     </div>
// //   );
// // }
// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));

// export default function FormData() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Paper className={classes.paper}>xs=12</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//         <Grid item xs={3}>
//           <Paper className={classes.paper}>xs=3</Paper>
//         </Grid>
//       </Grid>
//     </div>
//   );
// }
import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
export default function CenteredGrid() {
  //const classes = useStyles();

  return (
    <div style={{ marginLeft: "150px" }}>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
        }}
      ></Box>
      <Grid container spacing={10} style={{ marginTop: "20px" }}>
        <Grid item md={6} lg={5} sm={12}>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Grid>
        <Grid item md={6} lg={5} sm={12}>
          <TextField fullWidth label="fullWidth" id="fullWidth" />
        </Grid>
      </Grid>
    </div>
  );
}
