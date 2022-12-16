import { NextApiRequest, NextApiResponse } from "next";
import { comments } from "../../../data/comments";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { commentId } = req.query;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId as string)
  );
  res.status(200).json(comment);
}
