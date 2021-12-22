import { Link } from "remix";
import stylesUrl from "../styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Mario <span>Wiki!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="characters">View Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
