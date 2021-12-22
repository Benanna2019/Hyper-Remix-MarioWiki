import { useActionData, Link, useSearchParams, json } from "remix";
import { hyper } from "~/db.server";
import { addUser, retrieveUser } from "~/utils/hyper/models/user";
import { createUserSession, login, register } from "~/utils/session.server";
import stylesUrl from "../styles/login.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

// function validateUsername(username) {
//   if (typeof username !== "string" || username.length < 3) {
//     return `Usernames must be at least 3 charcaters long`;
//   }
// }

// function validatePassword(password) {
//   if (typeof password !== "string" || password.length < 6) {
//     return `Passwords must be at least 6 characters long`;
//   }
// }

// type ActionData = {
//   formError?: string;
//   fieldErrors?: {
//     username: string | undefined;
//     password: string | undefined;
//   };
//   fields?: {
//     loginType: string;
//     username: string;
//     password: string;
//   };
// };

const badRequest = (data) => json(data, { status: 400 });

export async function action({ request }) {
  const form = await request.formData();
  const loginType = form.get("loginType");
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/characters";

  if (
    typeof loginType !== "string" ||
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      message: `Form not submitted correctly`,
    });
  }

  // const fields = { loginType, username, password };
  // const fieldErrors = {
  //   username: validateUsername(username),
  //   password: validatePassword(password),
  // };
  // if (Object.values(fieldErrors).some(Boolean))
  //   return badRequest({ fieldErrors, fields });

  console.log("This is the logintype", loginType);
  console.log("These is the username", username);
  console.log("These is the password", password);
  console.log("These is the redirectTo", redirectTo);

  switch (loginType) {
    case "login": {
      const user = await login({ username, password });
      console.log("The loggin case user log", user);
      if (!user) {
        return {
          message: "Username/Password combination is incorrect",
        };
      }
      return createUserSession(user.id, redirectTo);
    }
    case "register": {
      // const userExists = await hyper.data.get(username);
      // if (userExists) {
      //   return badRequest({
      //     message: `User with ${username} already exists`,
      //   });
      // }
      const user = await register({ username, password });
      console.log({ user });
      if (!user) {
        return badRequest({
          message: "Not implemented",
        });
      }
      return createUserSession(user.id, redirectTo);
    }
    default: {
      return badRequest({
        message: `Login type invalid`,
      });
    }
  }
}

export default function Login() {
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  console.log("These are the search params", searchParams);
  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Login</h1>
        <form
          method="post"
          aria-describedby={
            actionData?.message ? "form-error-message" : undefined
          }
        >
          <input
            type="hidden"
            name="redirectTo"
            value={searchParams.get("redirectTo") ?? undefined}
          />
          <fieldset>
            <legend className="sr-only">Login or Register?</legend>
            <label>
              <input
                type="radio"
                name="loginType"
                value="login"
                defaultChecked={
                  !actionData?.loginType || actionData?.loginType === "login"
                }
              />{" "}
              Login
            </label>
            <label>
              <input
                type="radio"
                name="loginType"
                value="register"
                defaultChecked={actionData?.loginType === "register"}
              />{" "}
              Register
            </label>
          </fieldset>
          <div>
            <label htmlFor="username-input">Username</label>
            <input
              type="text"
              id="username-input"
              name="username"
              defaultChecked={actionData?.username}
              aria-invalid={Boolean(actionData?.username)}
              aria-describedby={
                actionData?.username ? "username-error" : undefined
              }
            />
            {actionData?.username ? (
              <p
                className="form-validation-error"
                role="alert"
                id="username-error"
              >
                {actionData?.username}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              name="password"
              defaultValue={actionData?.password}
              type="password"
              aria-invalid={Boolean(actionData?.password) || undefined}
              aria-describedby={
                actionData?.password ? "password-error" : undefined
              }
            />
            {actionData?.password ? (
              <p
                className="form-validation-error"
                role="alert"
                id="password-error"
              >
                {actionData?.password}
              </p>
            ) : null}
          </div>
          <div id="form-error-message">
            {actionData?.message ? (
              <p className="form-validation-error" role="alert">
                {actionData?.message}
              </p>
            ) : null}
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/characters">Characters</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
