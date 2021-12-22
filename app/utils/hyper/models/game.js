import { connect } from "hyper-connect";
import { gameSchema } from "../schemas";
import "dotenv/config";

const hyper = connect(`${process.env.HYPER}`);

function validateGame(data) {
  return gameSchema.safeParse(data);
}

export async function addGame(game) {
  const { success, data, error } = validateGame(game);
  if (success) {
    return await hyper.data.add(data);
  } else {
    return { ok: false, error };
  }
}

export async function listGames() {
  const result = await hyper.data.query({ type: "game" });
  if (result.ok) {
    return result.docs;
  } else {
    return [];
  }
}
