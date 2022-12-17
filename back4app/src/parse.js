import Parse from "parse/dist/parse";

// Initialize Parse
const PARSE_APPLICATION_ID = '2vToyMavA5CTVX4heB1yL2p2YmBDLRB39dIRfij4';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '3NDhd1yIu90OK9UkeAdRcR0gjOMA4TLd0Ikhp7p9';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export const doUserRegistration = async (email, password) => {
  return Parse.User.signUp(email, password);
};

export const doUserLogIn = async (username, password) => {
  return Parse.User.logIn(username, password);
};

export const isLoggedIn = async () => {
  return Parse.User.current() != null;
}

export const getUser = async () => {
  return Parse.User.current();
}

export const logOut = async () => {
  return Parse.User.logOut();
}