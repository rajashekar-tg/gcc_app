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
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

const steps = [
  "Customer Creation",
  "Product Creation",
  "Role Creation",
  "Company Customer Creation",
];
const icons = [
  <PeopleIcon />,
  <InventoryIcon />,
  <EngineeringIcon />,
  <BusinessIcon />,
];

const CreateCustomer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <div role="presentation">
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
            style={{ textDecoration: "none", color: "#9370DB" }}
            to="/users/listcustomer"
          >
            Customers
          </Link>
          <Link
            color="primary"
            style={{ textDecoration: "none" }}
            aria-current="page"
            to="/users/createcustomer"
          >
            Create Customer
          </Link>
        </Breadcrumbs>
      </div>
      <Card
        sx={{
          width: "88%",
          marginLeft: "50px",
          marginTop: "40px",
          height: "450px",
        }}
      >
        <CardContent
          sx={{
            fontSize: 14,
            backgroundColor: "#f5f5f5",
            height: "12vh",
          }}
          color="text.secondary"
          gutterBottom
        >
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            style={{ marginLeft: "-60px", width: "100%" }}
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
              Customer Created Successfully!!!.
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
    </>
  );
};

// Step 1 form component
const Step1Form = () => {
  return (
    <>
      <Box
        className="mx-2 mt-4"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Company Name"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          label="Email ID"
          variant="outlined"
          required
        />
      </Box>
      <Box
        className="mx-2 mt-2 d-flex"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          required
        />
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
              required
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
              required
            />
          )}
        />
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
        <TextField
          id="outlined-basic"
          label="Zip Code"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          required
        />
        <Button
          variant="outlined"
          component="label"
          sx={{ pt: 0.75, px: 18.5 }}
          size="small"
          color="success"
        >
          Organization Logo
          <input type="file" hidden required />
        </Button>
      </Box>
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

export default CreateCustomer;
