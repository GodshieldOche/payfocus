import type { NextApiRequest, NextApiResponse } from 'next'
import { serialize } from 'cookie';

export default function handler(req: NextApiRequest, res: NextApiResponse ) {

    let serialised;

    serialised = serialize("jwt", null!, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            maxAge: -1,
            path: "/",
          });
    

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Success" });

}

  
