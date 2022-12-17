import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useState} from "react";

export default function Register() {

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password || !repeatPassword) {
      setError("Please fill out all the fields.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    // clear the errors
    setError("");

    // TODO: send the register request
    console.log("Registering...");
  }

  return (
    <Container maxWidth="xs" sx={{mt: 2}}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Register
      </Typography>
      {error && <Alert severity="error" sx={{my: 2}}>{error}</Alert>}
      <Box component="form" onSubmit={onSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{mt: 1}}
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{mt: 3}}
          fullWidth
        />
        <TextField
          label="Repeat password"
          variant="outlined"
          type="password"
          autoComplete="repeat-new-password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          sx={{mt: 3}}
          fullWidth
        />
        <Button variant="contained" type="submit" sx={{mt: 3}} fullWidth>Register</Button>
        <Box sx={{mt: 2}}>
          Already have an account? <Link href="/login">Login</Link>
        </Box>
      </Box>
    </Container>
  )
}