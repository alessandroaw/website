import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const lat = -8.7855286;
  const long = 115.1596208;
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&formatted=0`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
