import{
    RainbowFirebaseApp
} from "@rainbow-modules/app";
import{
  EmailPasswordSignUpForm,
  EmailPasswordSignInForm,
  WhenAuthenticated,
  WhenNoAuthenticated
}from "@rainbow-modules/auth";

import firebase from "./firebase";
import { Button } from "react-rainbow-components";




function App() {
  return (
    <RainbowFirebaseApp app={firebase}>
      <WhenNoAuthenticated path='/' redirected='/app'>
        <EmailPasswordSignUpForm />
        <EmailPasswordSignInForm />
      </WhenNoAuthenticated>
      <WhenAuthenticated path='/app' redirect='/'>
        <span>Authenticated</span>
      <Button label="Log out" onClick={() =>firebase.auth().signOut()}></Button>
      </WhenAuthenticated>
    </RainbowFirebaseApp>
  );
}

export default App;
