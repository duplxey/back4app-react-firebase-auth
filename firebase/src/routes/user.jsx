import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {endSession, getSession, isLoggedIn} from "../storage/session";

export default function User() {

  let navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/login");
    }

    let session = getSession();
    setEmail(session.email);
    setAccessToken(session.accessToken);

    console.log("Your access token is: " + accessToken);
  }, [navigate, email, accessToken]);

  const onLogout = () => {
    endSession();
    navigate("/login");
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