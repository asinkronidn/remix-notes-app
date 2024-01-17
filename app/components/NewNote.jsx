export default function NewNote () {
    return (
        <form method="post" action="/create" id="note-form">
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" required/>
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea name="content" id="content" cols="30" rows="10"
                required></textarea>
            </p>
            <div className="form-actions">
                <button type="submit">Add Note</button>
            </div>
        </form>
    )
}