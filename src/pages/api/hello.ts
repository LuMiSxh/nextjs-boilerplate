// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import IResponse from '@/types/IResponse';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IResponse>
) {
  res.status(200).json({
    status: { error: false, message: 'OK' },
    data: 'Hello from the API!',
  });
}
