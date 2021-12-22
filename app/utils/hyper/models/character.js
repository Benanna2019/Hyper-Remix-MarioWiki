import { connect } from "hyper-connect";
import { characterSchema } from "../schemas";
import "dotenv/config";

const hyper = connect(`${process.env.HYPER}`);

function validateCharacter(data) {
  return characterSchema.safeParse(data);
}

export async function addCharacter(character) {
  const { success, data, error } = validateCharacter(character);

  if (success) {
    return await hyper.data.add(data);
  } else {
    return { ok: false, error };
  }
}

export async function listCharacters() {
  // call hyper to get a list
  const result = await hyper.data.query({ type: "character" });
  if (result.ok) {
    return result.docs;
  } else {
    return [];
  }
}

export async function getCharacterById(id) {
  const result = await hyper.data.get(id);
  if (result.ok) {
    console.log(result.docs);
    return result.docs;
  } else {
    return result.msg;
  }
}

export async function deleteCharacter(character) {
  const result = await hyper.data.destroy(character);
  if (result.ok) {
    console.log(result.docs);
    return result.docs;
  } else {
    return { message: "failed to delete this character" };
  }
}
