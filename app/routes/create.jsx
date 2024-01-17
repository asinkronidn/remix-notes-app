import { redirect } from "@remix-run/node"
import NewNote from "../components/NewNote";
import { storeNotes } from "../data/notes";

export async function action ({
  request
}) {
  // request.formData().then(formData => {
  //   const noteData = Object.fromEntries(formData)
  //   console.log(noteData)
  // })
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  noteData.id = new Date().toISOString();
  console.log("noteData", noteData);
  await storeNotes(noteData);
  return redirect('/');
  // const formData = await request.formData()
}

export default function CreateNotePage() {
    return (
      <main>
        <NewNote/>
      </main>
    );
}