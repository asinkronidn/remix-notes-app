import fs from 'fs/promises'; // library Filesystem dari node.js

// Fungsi mengambil data json dari file notes.json
export async function getStoredNotes() {
  const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedNotes = data.notes ?? [];
  return storedNotes;
}

// Menambahkan data json baru dan menyimpannya ke notes.json
export async function storeNotes(noteData) {
  const existingNotes = await getStoredNotes();
  const updatedNotes = existingNotes.concat(noteData);
  return fs.writeFile('notes.json', JSON.stringify({ notes: updatedNotes || [] }));
}
