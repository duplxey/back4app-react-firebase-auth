import Parse from "parse/dist/parse";

// Initialize Parse
const PARSE_APPLICATION_ID = '<your_parse_application_id>';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '<your_parse_javascript_key>';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export const doUserRegistration = async (username, password) => {
  return Parse.User.signUp(username, password);
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