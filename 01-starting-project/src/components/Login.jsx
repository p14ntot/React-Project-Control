

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()} className=" w-28 h-11 rounded-sm bg-blue-600 hover:to-blue-500 text-white font-bold">Log In</button>;
};

export default Login;