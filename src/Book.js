export const Book = ({title = "No title provided", author = "No author", pages = 0, Illustrator = "Unknown", freeBookMark}) => {
    return (
      <section>
        <h2>{title}</h2>
        <p>by: {author}</p>
        <p>pages: {pages} pages </p>
        <p> Illustration by: {Illustrator}</p>
        <p> Free bookmark today: {freeBookMark ? 'yes!': 'no!'} </p>
      </section>
    )
}