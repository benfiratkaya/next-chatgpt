import type { NextApiRequest, NextApiResponse } from 'next'
import {chat} from "@/libs/openai";

interface ChatRequest extends NextApiRequest {
  body: {
    prompt: string
  }
}

type Data = {
  status: boolean;
  message?: string;
  data?: {
    choices: {
      message: string;
    }[]
  };
}

export default async function handler(
  req: ChatRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await chat(req.body.prompt);
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
