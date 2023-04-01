import type { NextApiRequest, NextApiResponse } from 'next'

interface ChatRequest extends NextApiRequest {
  body: {
    prompt: string
  }
}

type Data = {
  name: string
}

export default function handler(
  req: ChatRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
