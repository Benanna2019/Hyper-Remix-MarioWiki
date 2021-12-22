import { useLoaderData, useParams, Link, useCatch, redirect } from "remix";
import { getUserId, requireUserId } from "~/utils/session.server";
import { hyper } from "~/db.server";

export async function loader({ request, params }) {
  const userId = await getUserId(request);
  let { characterId } = params;
  let character = await hyper.data.get(characterId);
  if (!character) {
    throw new Response("What?! Character was not found.", {
      status: 404,
    });
  }

  const data = {
    character,
    isOwner: userId === character.user_id,
  };

  return data;
}

export async function action({ request, params }) {
  const form = await request.formData();

  if (form.get("_method") === "delete") {
    const userId = await requireUserId(request);
    // console.log(userId);
    const character = await hyper.data.get(params.characterId);
    // console.log(character);
    if (!character) {
      throw new Response("Can't delete what does not exist", { status: 404 });
    }
    if (character.user_id !== userId) {
      throw new Response("Pssh, nice try. That's not your character", {
        status: 401,
      });
    }
    await hyper.data.remove(params.characterId);
    return redirect("/characters");
  }
}

export default function SingleCharacterRoute() {
  let data = useLoaderData();
  console.log("This is the loader data", data);

  return (
    <div>
      <h2>Name: {data.character.name}</h2>
      <h4>Debut: {data.character.debut}</h4>
      {data.isOwner ? (
        <form method="post">
          <input type="hidden" name="_method" value="delete" />
          <button type="submit" className="button">
            Delete
          </button>
        </form>
      ) : null}
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  const params = useParams();
  if (caught.status === 404) {
    return (
      <div className="error-container">
        Huh? Who the heck is "{params.characterId}"
      </div>
    );
  }
  throw new Error(`Unhandled error: ${caught.status}`);
}

export function ErrorBoundary() {
  let { characterId } = useParams();
  console.log("the character id from the params", characterId);
  return (
    <div className="error-container">{`There was an error loading character by the id ${characterId}. Sorry.`}</div>
  );
}
