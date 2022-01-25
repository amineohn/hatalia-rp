// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  han: NextApiHandler<NextApiHandler>
) {
  res.status(200).json({
    message: "Hello World",
  });
}
