import { connect } from "hyper-connect";
import { userSchema } from "../schemas";
import "dotenv/config";

const hyper = connect(`${process.env.HYPER}`);

const byType = (doctype) => (doc) => doc.type === doctype;

// User Functions (for creating a user...)

function validateUser(data) {
  return userSchema.safeParse(data);
}

export async function addUser(user) {
  const { success, data, error } = validateUser(user);
  if (success) {
    return await hyper.data.add(data);
  } else {
    return { ok: false, error };
  }
}

export async function retrieveUser(username) {
  // console.log(typeof username);
  const { docs } = await hyper.data.get();
  const users = docs.filter(byType("user"));
  const user = users.filter((user) => user.username === username);
  const currentUser = await hyper.data.get(user[0]._id);
  console.log("The user docs", currentUser);
  if (!currentUser) return null;

  return currentUser;
}
