import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
  TextField,
  Autocomplete,
  Checkbox,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";

const steps = ["User Creation", "User Roles", "Message"];
const icons = [<SettingsIcon />, <GroupAddIcon />, <VideoLabelIcon />];

const CreateUser = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Card
      sx={{
        width: "88%",
        marginLeft: "10px",
        marginTop: "20px",
        height: "500px",
      }}
    >
      <CardContent
        sx={{ fontSize: 14, backgroundColor: "#f5f5f5", height: "11vh" }}
        color="text.secondary"
        gutterBottom
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          style={{ marginLeft: "-130px", width: "100%" }}
        >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel
                StepIconComponent={() =>
                  activeStep > index ? (
                    <CheckCircleIcon color="primary" />
                  ) : (
                    icons[index]
                  )
                }
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </CardContent>
      <Divider sx={{ bgcolor: "secondary.light" }} />

      <div>
        {activeStep === steps.length ? (
          <Typography variant="h5" sx={{ mt: 7 }}>
            User Created Successfully!!!.
          </Typography>
        ) : (
          <div style={{ marginLeft: "auto" }}>
            {/* Render form components based on the active step */}
            {activeStep === 0 && <Step1Form />}
            {activeStep === 1 && <Step2Form />}
            {activeStep === 2 && <Step3Form />}
            {/* Buttons for navigating between steps */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  marginRight: "30px",
                  backgroundColor: "#ff3d00",
                  color: "white",
                }}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Save & Next"}
              </Button>
              <Button
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                style={{
                  marginRight: "70px",
                  backgroundColor: "#ff3d00",
                  color: "white",
                }}
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

// Step 1 form component
const Step1Form = () => {
  return (
    <>
      <div className="mt-4 mx-3 d-flex">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={userTypes}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select User Type" />
          )}
        />
        <Checkbox
          {...label}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 38, marginLeft: "20px" } }}
        />
        <span className="d-flex justify-content-center align-items-center">
          Is Admin User
        </span>
      </div>
      <Box
        className="mx-2 mt-2"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      </Box>
      <Box
        className="mx-2 mt-2"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email Id" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
      </Box>
      <div className="mt-3 mx-3 d-flex">
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300, marginLeft: "14px" }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select State"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mx: 2, width: "33.5ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Email Id" variant="outlined" />
        </Box>
      </div>
    </>
  );
};
const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const userTypes = [{ label: "User" }, { label: "Admin" }];

// Step 2 form component
const Step2Form = () => {
  return (
    <div>
      {/* Add your form fields here */}
      <Typography variant="h5">Step 2</Typography>
    </div>
  );
};

// Step 3 form component
const Step3Form = () => {
  return (
    <div>
      {/* Add your form fields here */}
      <Typography variant="h5">Step 3</Typography>
    </div>
  );
};

export default CreateUser;
