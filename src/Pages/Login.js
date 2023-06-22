import React, { useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Login() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const handlePassword = () => {
    setshow(!show);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name && password) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/users");
      }, 2000);
      return;
    } else {
      setError(true);
      return;
    }
  };

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
                {success ? (
                  <div
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Login Successfully...!
                  </div>
                ) : (
                  ""
                )}

                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      m: 1,
                      ml: 0,
                      width: "33ch",
                    },
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
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="current-username"
                      inputProps={{ style: { fontSize: 14 } }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                    {error && name.length <= 0 ? (
                      <span style={{ color: "red", fontStyle: "italic" }}>
                        please enter username
                      </span>
                    ) : (
                      ""
                    )}
                    <TextField
                      sx={{ ml: "0", position: "relative" }}
                      id="outlined-password-input"
                      label="Password"
                      type={show ? "text" : "password"}
                      size="small"
                      onChange={(e) => setPassword(e.target.value)}
                      inputProps={{ style: { fontSize: 14 } }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <span
                            style={{
                              position: "absolute",
                              top: "50%",
                              right: "8px",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                            }}
                            onClick={handlePassword}
                          >
                            {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </span>
                        ),
                      }}
                    />

                    {error && password.length <= 0 ? (
                      <span style={{ color: "red", fontStyle: "italic" }}>
                        please enter password
                      </span>
                    ) : (
                      ""
                    )}
                    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                      <FormControl>
                        <Link
                          to="#"
                          style={{ fontSize: "0.8rem", textDecoration: "none" }}
                        >
                          Forgot Password
                        </Link>
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
                <Button
                  variant="contained"
                  className="mt-3"
                  size="medium"
                  fullWidth
                  onClick={handleClick}
                >
                  Sign in
                </Button>
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
