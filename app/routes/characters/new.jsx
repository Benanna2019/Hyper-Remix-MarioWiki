import { redirect, useActionData, json, useCatch, Link } from "remix";
import cuid from "cuid";
import { requireUserId, getUserId } from "../../utils/session.server";
import { addCharacter } from "../../utils/hyper/models/character";

export async function loader({ request }) {
  const userId = await getUserId(request);
  console.log(userId);
  if (!userId) {
    throw new Response("Unauthorized", { status: 401 });
  }
  return {};
}

function validateCharacterContent(debut) {
  if (debut.length !== 4) {
    return `Debut must be a four digit year`;
  }
}

function validateCharacterName(name) {
  if (name.length < 2) {
    return `That character name is too short`;
  }
}

const badRequest = (data) => json(data, { status: 400 });

export async function action({ request }) {
  const userId = await requireUserId(request);
  const form = await request.formData();
  const name = form.get("name");
  const debut = form.get("debut");

  // we do this type check to be extra sure and to make TypeScript happy
  // we'll explore validation next!

  if (typeof name !== "string" || typeof debut !== "string") {
    throw new Error(`Form not submitted correctly.`);
  }

  let character = await addCharacter({
    id: "character- " + cuid(),
    type: "character",
    name,
    debut,
    user_id: userId,
  });
  console.log("This is the individual character information", character.id);

  return redirect(`/characters/${character.id}`);
}

export default function NewCharacter() {
  return (
    <div>
      <h3>Add Your Own Character!</h3>
      <form method="post">
        <div>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Debut:
            <input type="text" name="debut" />
          </label>
        </div>
        <button type="submit" className="button">
          Add
        </button>
      </form>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 401) {
    return (
      <div className="error-container">
        <p>You must be logged in to create a character.</p>
        <Link to="/login">Login</Link>
      </div>
    );
  }
}

export function ErrorBoundary() {
  return (
    <div className="error-container">
      Something unexpected went wrong. Sorry about that.
    </div>
  );
}
