import {Button, Container, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getUser, isLoggedIn, logOut} from "../parse";

export default function User() {

  let navigate = useNavigate();

  const [email, setEmail] = useState("");

  useEffect(() => {
    (async () => {
      let loggedIn = await isLoggedIn();
      if (!loggedIn) {
        navigate("/login");
      }

      let user = await getUser();
      setEmail(user.getEmail());

      console.log("Your session token is: " + user.getSessionToken());
    })();
  }, [navigate]);

  const onLogout = async () => {
    await logOut();
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