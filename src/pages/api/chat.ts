import type { NextApiRequest, NextApiResponse } from 'next'
import {chat} from "@/libs/openai";

interface ChatRequest extends NextApiRequest {
  body: {
    prompt: string
    messages: ChatMessage[]
  }
}

type Data = {
  status: boolean;
  message?: string;
  data?: {
    message: ChatMessage[]
  };
}

export default async function handler(
  req: ChatRequest,
  res: NextApiResponse<Data>
) {
  try {
    const {prompt, messages} = req.body;
    const response = await chat(prompt, messages);
    //console.log(response);
    const data = response.choices.map(choice => choice.message);
    res.status( 200).json({
      status: true,
      data
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
