import type { NextApiRequest, NextApiResponse } from 'next'
import {translate} from "@/libs/openai";

interface TranslateRequest extends NextApiRequest {
  body: {
    text: string,
    sourceLang: string,
    targetLang: string,
  }
}

type Data = {
  status: boolean;
  message?: string;
  data?: {
    text: string
  }
}

export default async function handler(
    req: TranslateRequest,
    res: NextApiResponse<Data>
) {
  try {
    const {text, sourceLang, targetLang} = req.body;
    const response = await translate(text, sourceLang, targetLang);

    res.status(200).json({
      status: true,
      data: {
        text: response.choices[0].message.content
      }
    })
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      res.status(500).json({
        status: false,
        message: error.response.data
      })
    } else {
      console.log(error.message);
      res.status(500).json({
        status: false,
        message: error.message
      })
    }
  }
}
