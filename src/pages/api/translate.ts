import type { NextApiRequest, NextApiResponse } from 'next'
import {translate} from "@/libs/openai";

interface TranslateRequest extends NextApiRequest {
  body: {
    text: string,
    sourceLanguage: string,
    targetLanguage: string,
  }
}

type Data = {
  text: string
}

export default async function handler(
    req: TranslateRequest,
    res: NextApiResponse<Data>
) {
  try {
    const {text, sourceLanguage, targetLanguage} = req.body;
    const response = await translate(text, sourceLanguage, targetLanguage);
    console.log(response);
    res.status(200).json({
      text: response.choices[0].message.content
    })
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
