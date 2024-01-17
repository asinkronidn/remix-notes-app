import { useLoaderData, Link } from "@remix-run/react";
import { getStoredNotes } from "../data/notes";

export const loader = async ({params}) => {
    // console.log('noteId', params.noteId)
    // console.log('id', params.id)
    const notes = await getStoredNotes();
    const selectedNote = notes.find(note => note.id === params.noteId);
    // return notes;
    return selectedNote;
}

export default function NoteDetail() {
    const noteDetail = useLoaderData();
    return (
        <main>
            <div className="nav-item">
                <Link to="/">Back To Homepage</Link>
            </div>
            <h1>{noteDetail.title}</h1>
            <p>{noteDetail.content}</p>
        </main>
    )
}