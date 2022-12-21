import {Alert, Box, Button, Container, Link, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function Login() {

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password) {
      setError("Please enter your username and password.");
      return;
    }

    // clear the errors
    setError("");

    // TODO: send the login request
    console.log("Logging in...");
  }

  return (
    <Container maxWidth="xs" sx={{mt: 2}}>
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Login
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
        <Button variant="contained" type="submit" sx={{mt: 3}} fullWidth>Login</Button>
        <Box sx={{mt: 2}}>
          Don't have an account yet? <Link href="/register">Register</Link>
        </Box>
      </Box>
    </Container>
  )
}