import { useLoaderData, Link, useCatch } from "remix";
import { hyper } from "~/db.server";

export default function CharctersIndexRoute() {
  return (
    <div>
      <h4>Here is where the Character information will be.</h4>
      <p>Click on a character and their information will appear.</p>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <div className="error-container">There are no characters to display</div>
    );
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}

export function ErrorBoundary() {
  return <div className="error-container">I did a whoopsies</div>;
}
