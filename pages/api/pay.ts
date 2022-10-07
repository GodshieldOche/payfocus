import axios from "axios";
import type { NextApiRequest, NextApiResponse } from 'next'
import { signature } from "../../utils/signature";


export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const body = req.body

    const date = new Date().toJSON()

    let success

    try {
      const data = await axios.post('https://api.dlocal.com/secure_payments', body, {
        headers: {
            'Accept': 'application/json',
            'X-Date': date,
            'X-Login': process.env.X_Login!,
            'X-Trans-Key': process.env.X_Trans_Key!,
            'Content-Type': 'application/json',
            'User-Agent': 'MerchantTest / 1.0',
            'X-Version': '2.1',
            Authorization: `V2-HMAC-SHA256, Signature: ${signature(date, body)}`
        }
    })
    success = data.data
    } catch (error:any) {
      res.json({error: error.message})
    }

    res.status(200).json({success: success})

   
}


