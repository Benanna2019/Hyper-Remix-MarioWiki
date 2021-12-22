import { useLoaderData, Link, Outlet } from "remix";
import { getUser } from "~/utils/session.server";
import stylesUrl from "../styles/characters.css";
import { listCharacters } from "../utils/hyper/models/character";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export async function loader({ request }) {
  const result = await listCharacters();
  const user = await getUser(request);
  // console.log(result);
  const data = { result, user };
  // console.log(data);
  return { data };
}

export default function CharactersRoute() {
  let { data } = useLoaderData();
  console.log("this is the loaderdata", data.user);

  return (
    <div className="characters-layout">
      <header className="characters-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="Remix characters" aria-label="Remix characters">
              <span className="logo">🕹</span>
              <span className="logo-medium">Mario Wiki</span>
            </Link>
          </h1>
          {data.user ? (
            <div className="user-info">
              <span>{`Hi ${data.user.username}`}</span>
              <form action="/logout" method="post">
                <button type="submit" className="button">
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </header>
      <main className="characters-main">
        <div className="container">
          <div className="characters-list">
            <p>Here are a few more characters to check out:</p>
            <ul>
              {data.result.map((character) => (
                <li key={character.id}>
                  <Link to={character.id}>{character.name}</Link>
                </li>
              ))}
            </ul>
            <Link to="new" className="button">
              Add your own!
            </Link>
          </div>
          <div className="characters-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
