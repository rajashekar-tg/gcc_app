

import React from "react";
import Button from "@mui/material/Button";
import LoginImage from "../images/login.png";
import LogoImage from "../images/CogntiveLogo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import "../Pages/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="login_body">
      <div className="form-box">
        <div className="login_transbg1"></div>
        <div className="login_transbg2"></div>
        <div className="form-box_in shadow-lg">
          <div className="row">
            <div className=" col-lg-6 p-0">
              <div className="form_left">
                <h3 className="text-white fs-4 text-center pt-5">LOGIN</h3>
                <div className="cartoon_img">
                  <img src={LoginImage} alt="LogoText" />
                </div>
              </div>
            </div>
            <div className=" col-lg-6 p-0">
              <div className="form_right">
                <div className="logo_img">
                  <img src={LogoImage} alt="Logo" />
                </div>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, ml: 0, width: "33ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      sx={{ ml: 0 }}
                      id="outlined-username-input"
                      label="UserName"
                      type="text"
                      size="small"
                      autoComplete="current-username"
                      inputProps={{ style: { fontSize: 14 } }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                    <TextField
                      sx={{ ml: "0" }}
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      size="small"
                      inputProps={{ style: { fontSize: 14 } }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                      autoComplete="current-password"
                    />
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <FormControl>
                        <a
                          href="#"
                          style={{ fontSize: "0.8rem", textDecoration: "none" }}
                        >
                          Forgot Password
                        </a>
                      </FormControl>
                      <FormControl>
                        <a
                          href="#"
                          style={{ fontSize: "0.8rem", textDecoration: "none" }}
                        >
                          Don't have an account? Sign Up
                        </a>
                      </FormControl>
                    </Box>
                  </div>
                </Box>

                <Link to="/users">
                  <Button
                    variant="contained"
                    className="mt-3"
                    size="medium"
                    fullWidth
                  >
                    Sign in
                  </Button>
                </Link>

                <a
                  href="#"
                  size="xs"
                  onClick={() => setOpen(true)}
                  style={{
                    fontSize: "0.8rem",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                    marginTop: "1rem",
                  }}
                >
                  Terms and Conditions
                </a>
                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={open}
                  onClose={() => setOpen(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 500,
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                    }}
                  >
                    <ModalClose
                      variant="outlined"
                      sx={{
                        top: "calc(-1/4 * var(--IconButton-size))",
                        right: "calc(-1/4 * var(--IconButton-size))",
                        boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                        borderRadius: "50%",
                        bgcolor: "background.body",
                      }}
                    />
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      fontWeight="lg"
                      mb={1}
                    >
                      Terms and Conditions
                    </Typography>
                    <Typography
                      id="modal-desc"
                      textColor="text.tertiary"
                      mb={2}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </Typography>
                  </Sheet>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
