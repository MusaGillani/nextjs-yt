import { useState } from "react";

type Comment = {
  id: number;
  text: string;
};
export default function CommentsPage() {
  const [comments, setComments] = useState<Comment[]>([]);

  const fetchComments = async () => {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  };
  return (
    <>
      <button onClick={fetchComments}>Load Comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          {comment.id} {comment.text}
        </div>
      ))}
    </>
  );
}
