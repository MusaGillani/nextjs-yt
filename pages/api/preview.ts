import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData({ user: "musa" });
  //   res.end("Preview mode enabled");
  res.redirect(req.query.redirect as string);
}
