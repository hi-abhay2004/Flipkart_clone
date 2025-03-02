import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Divider,
} from "@mui/material";

const SignInForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    alert(`Logged in with email: ${state.email} and password: ${state.password}`);
    setState({ email: "", password: "" });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "800px",
        bgcolor: "white",
        boxShadow: 24,
        borderRadius: "10px",
        overflow: "hidden",
        zIndex: 1300, // Ensures it's above other elements
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          width: "100%",
          height: "450px",
        }}
      >
        {/* Left Panel */}
        <Box
          sx={{
            width: "40%",
            bgcolor: "#2874f0",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Login
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
            Get access to your Orders, Wishlist and Recommendations
          </Typography>
        </Box>

        {/* Right Panel */}
        <Box
          sx={{
            width: "60%",
            bgcolor: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "40px",
          }}
        >
          <form onSubmit={handleOnSubmit}>
            <TextField
              label="Enter Email / Mobile Number"
              variant="standard"
              fullWidth
              name="email"
              value={state.email}
              onChange={handleChange}
              sx={{ mb: 3 }}
            />
            <TextField
              label="Enter Password"
              type="password"
              variant="standard"
              fullWidth
              name="password"
              value={state.password}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" sx={{ color: "#2874f0", mb: 2 }}>
              Forgot Password?
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ bgcolor: "#fb641b", color: "#fff", mb: 2 }}
              type="submit"
            >
              Login
            </Button>
            <Typography
              variant="body2"
              sx={{ textAlign: "center", mb: 2, color: "#666" }}
            >
              OR
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              sx={{ borderColor: "#ccc", color: "#000", mb: 2 }}
            >
              Request OTP
            </Button>
            <Divider />
            <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
              New to Flipkart?{" "}
              <Typography
                component="span"
                sx={{ color: "#2874f0", fontWeight: "bold", cursor: "pointer" }}
              >
                Create an account
              </Typography>
            </Typography>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignInForm;
