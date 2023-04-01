import type { NextApiRequest, NextApiResponse } from 'next'
import {translate} from "@/libs/openai";

interface TranslateRequest extends NextApiRequest {
  body: {
    text: string
  }
}

type Data = {
  name: string
}

export default async function handler(
    req: TranslateRequest,
    res: NextApiResponse<Data>
) {
  try {
    const response = await translate(req.body.text);
    console.log(response);
    res.status(200).json(response.choices[0].message)
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      res.status(500).json(error.response.data)
    } else {
      console.log(error.message);
      res.status(500).json(error.message)
    }
  }
}
