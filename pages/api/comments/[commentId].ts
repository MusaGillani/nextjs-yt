import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  if (req.method === "GET") {
    const comment = comments.find(
      (comment) => comment.id === parseInt(commentId as string)
    );
    res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deletedComment = comments.find(
      (comment) => comment.id === parseInt(commentId as string)
    );
    const index = comments.findIndex(
      (comment) => comment.id === parseInt(commentId as string)
    );
    comments.splice(index, 1);
    res.status(200).json(deletedComment);
  }
}
