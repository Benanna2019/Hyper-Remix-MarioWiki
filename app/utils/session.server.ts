import { createCookieSessionStorage, redirect } from "remix";
import bcrypt from "bcrypt";
import cuid from "cuid";
import { addUser, retrieveUser } from "./hyper/models/user";
import { hyper } from "~/db.server";
import "dotenv/config";

// type LoginForm = {
//   username: string;
//   password: string;
// };

export async function register({ username, password }) {
  const passwordHash = await bcrypt.hash(password, 10);
  const createdUser = await addUser({
    _id: "user-" + cuid(),
    id: "user-" + cuid(),
    type: "user",
    username,
    passwordHash,
  });
  console.log("This is the created user", createdUser);
  return createdUser;
}

export async function login({ username, password }) {
  // console.log("login function typeof", typeof username);
  const user = await retrieveUser(username);
  console.log("The log for login from the server", user);
  if (!user) return null;

  const isCorrectPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isCorrectPassword) return null;

  return user;
}

const sessionSecret = `${process.env.SESSION_SECRET}`;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RemixMarioWiki_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function requireUserId(
  request,
  redirectTo = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function getUser(request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await hyper.data.get(userId);
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

export async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}
