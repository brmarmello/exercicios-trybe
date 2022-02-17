import { useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  function handleChange(e) {
    setComment(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setComments((comments) => [...comments, comment]);
    setComment("");
  }

  return (
    <section>
      <h1>Página de Comentários</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment"></label>
        <input
          type="text"
          id="comment"
          value={comment}
          onChange={handleChange}
        />
        <button type="submit">Adicionar Comentário</button>
      </form>

      <ol>
        {comments.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ol>
    </section>
  );
}
export default Comments;
