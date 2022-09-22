import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse ) {
    const { cookies } = req

    const jwt = cookies.jwt;

    if (jwt) {
        res.status(200).json({ token: jwt })
    } else {
        res.status(400).json({ token: null })
    }

}
  
