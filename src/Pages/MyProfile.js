import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Select, MenuItem } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

export default function MyProfile() {
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div>
      <div role="presentation" style={{ margin: "20px" }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator="›"
          sx={{ fontSize: "15px", fontWeight: "bold" }}
        >
          <Link
            style={{ textDecoration: "none", color: "#9370DB" }}
            to="/users"
          >
            Home
          </Link>
          <Link
            color="primary"
            style={{ textDecoration: "none" }}
            aria-current="page"
            to="/users/myprofile"
          >
            My Profile
          </Link>
        </Breadcrumbs>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ backgroundColor: "rgb(236,236,236)" }}
        >
          <Typography>Personal Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            Validate
            autoComplete="on"
          >
            <Grid container>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name*"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField id="lastName" name="lastName" label="Last Name*" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField
                    id="displayName"
                    name="displayName"
                    label="Display Name*"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField id="email" name="email" label="Email ID*" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField
                    id="workNumber"
                    name="workNumber"
                    label="Work Number*"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <div style={{ float: "right" }}>
              <Button variant="contained" sx={{ backgroundColor: "#ff3d00" }}>
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff3d00", margin: "20px" }}
              >
                Cancle
              </Button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: "20px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{ backgroundColor: "rgb(236,236,236)" }}
        >
          <Typography>Credentials</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            Validate
            autoComplete="on"
          >
            <Grid container>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ width: 500 }}>
                  <TextField
                    id="oldPassword"
                    name="oldPassword"
                    label="Old Password*"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ width: 500 }}>
                  <TextField
                    id="newPassword"
                    name="newPassword"
                    label="New Password*"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "20px" }}
                >
                  <TextField
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    label="Confirm New Password*"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <div style={{ float: "right" }}>
              <Button variant="contained" sx={{ backgroundColor: "#ff3d00" }}>
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff3d00", margin: "20px" }}
              >
                Cancle
              </Button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ marginTop: "20px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{ backgroundColor: "rgb(236,236,236)" }}
        >
          <Typography>Security Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            Validate
            autoComplete="on"
          >
            <Grid container>
              <Grid item xs={6}>
                <FormControl sx={{ width: 500 }}>
                  <InputLabel>Question Number 1</InputLabel>
                  <Select
                    value={selectedValue}
                    onChange={(event) => setSelectedValue(event.target.value)}
                    sx={{ marginTop: "10px" }}
                  >
                    <MenuItem value="option1">
                      What is your favorite color
                    </MenuItem>
                    <MenuItem value="option2">
                      What is the name of your first beach visited
                    </MenuItem>
                    <MenuItem value="option3">
                      What is your favorite color
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField id="answer" name="answer" label="answer*" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: 500 }}>
                  <InputLabel>Question Number 2</InputLabel>
                  <Select
                    value={selectedValue}
                    onChange={(event) => setSelectedValue(event.target.value)}
                    sx={{ marginTop: "10px" }}
                  >
                    <MenuItem value="option1">
                      What is your favorite color
                    </MenuItem>
                    <MenuItem value="option2">
                      What is the name of your first beach visited
                    </MenuItem>
                    <MenuItem value="option3">
                      What is your favorite color
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField id="answer" name="answer" label="answer*" />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl sx={{ width: 500 }} style={{ marginTop: "20px" }}>
                  <InputLabel>Question Number 3</InputLabel>
                  <Select
                    value={selectedValue}
                    onChange={(event) => setSelectedValue(event.target.value)}
                    sx={{ marginTop: "10px" }}
                  >
                    <MenuItem value="option1">
                      What is your favorite color
                    </MenuItem>
                    <MenuItem value="option2">
                      What is the name of your first beach visited
                    </MenuItem>
                    <MenuItem value="option3">
                      What is your favorite color
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField id="answer" name="answer" label="answer*" />
                </FormControl>
              </Grid>
            </Grid>
            <div style={{ float: "right" }}>
              <Button variant="contained" sx={{ backgroundColor: "#ff3d00" }}>
                Save
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#ff3d00", margin: "20px" }}
              >
                Cancle
              </Button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
