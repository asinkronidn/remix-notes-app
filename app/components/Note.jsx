export default function Note(props) {
    return (
    <article>
        <header>
            <ul className="note-meta">
            <li>#{props.index + 1}</li>
            <li>
                <time dateTime={props.note.id}>
                {new Date(props.note.id).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                })}
                </time>
            </li>
            </ul>
            <h2>{props.note.title}</h2>
        </header>
        <p>{props.note.content}</p>
        </article>
    );
}