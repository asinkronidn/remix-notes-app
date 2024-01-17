import { useLoaderData, Link } from "@remix-run/react";
import { getStoredNotes } from "../data/notes";
import Note from "../components/Note";
export const meta = () => {
  return [{ title: "New Remix App" }];
};

export const loader = async () => {
  const notes = await getStoredNotes();
  return notes;
}

export default function HomePage() {
  const notes = useLoaderData();

  return (
    <main>
      <div className="nav-item">
        <Link to="/create">Create New Note</Link>
      </div>
      <h1>Note List</h1>
      <ul id="note-list">
      {notes.map((note, index) => (
        <li key={note.id} className="note">
          <Link to={`/note/${note.id}`}>
            <Note index={index} note={note}/>
          </Link>
        </li>
      ))}
    </ul>
    </main>
  );
}
