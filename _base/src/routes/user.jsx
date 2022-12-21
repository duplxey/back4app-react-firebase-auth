import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function User() {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    // TODO: check if user is logged in and display the data
  }, [navigate]);

  const onLogout = () => {
    // TODO: log the user out
  }

  return (
    <Container maxWidth="xs" sx={{mt: 2}}>
      <Typography variant="h6" component="h1" textAlign="center" gutterBottom>
        You're logged in as:
      </Typography>
      <Typography variant="h5" component="h1" textAlign="center" gutterBottom>
        {email}
      </Typography>
      <Typography variant="p" component="p" textAlign="center" gutterBottom>
        Check the console for your (access/session) token.
      </Typography>
      <Button variant="contained" color="error" onClick={onLogout} sx={{mt: 3}} fullWidth>
        Log out
      </Button>
    </Container>
  )
}