import { useState, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { appRoutes } from "../../utils/constants";
import { gql, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import {
  requestUserLoading,
  requestUserError,
  requestUserSuccess,
} from "../../store/actions";
import { loginFormInitial, loginFormReducer } from "../../utils/helpers";
import { getBrowserCookie } from "../../utils/auth";
import { INPUT_EMAIL, INPUT_PASSWORD, CLEAR_FORM } from "../../utils/constants";

export const LOGIN = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

export default function Login() {
  const storeDispatch = useDispatch();
  const [login, { loading, error, data }] = useMutation(LOGIN);
  const [state, dispatch] = useReducer(loginFormReducer, loginFormInitial);
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookie] = useCookies(["id_token"]);
  const router = useRouter();
  const userAuthenticated = getBrowserCookie();

  const handleChange = (event, type) => {
    dispatch({
      type: type,
      payload: event.target.value,
    });
    if (type === CLEAR_FORM) event.target.value = " ";
  };

  const handleSignIn = (e) => {
    login({
      variables: {
        email: state.email,
        password: state.password,
      },
    });
    handleChange(e, CLEAR_FORM);
    setLoggedIn(true);
  };

  useEffect(() => {
    if (userAuthenticated) {
      router
        .push(appRoutes.DASHBOARD_PAGE)
        .then(() => window.location.reload());
    }
  }, []);

  if (data) {
    storeDispatch(requestUserSuccess(data.login));
    setCookie("id_token", data.login.token);
    router.push("/dashboard");
  }
  if (loading) {
    storeDispatch(requestUserLoading());
  }
  if (error) {
    storeDispatch(requestUserError(error));
    setLoggedIn(false);
  }

  return (
    <div>
      {!loggedIn ? (
        <>
          <input
            name="email"
            type="text"
            placeholder="E-mail"
            onChange={(event) => handleChange(event, INPUT_EMAIL)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(event) => handleChange(event, INPUT_PASSWORD)}
          />
          <button onClick={handleSignIn}>LOGIN</button>
        </>
      ) : (
        <div>ESTAS LOGUEADO</div>
      )}
    </div>
  );
}
