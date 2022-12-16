import { useState } from "react";

type Comment = {
  id: number;
  text: string;
};
export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [comment, setComment] = useState<string>("");

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };

  const submitComment = async () => {
    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
        </div>
      ))}
    </>
  );
}
