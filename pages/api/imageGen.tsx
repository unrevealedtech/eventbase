import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(500).json({ message: "Disabled" });
  //   const { description } = req.body;

  //   console.log(req.body);
  //   let pyq: string;
  //   if (process.env.PYQ_API_KEY) {
  //     pyq = process.env.PYQ_API_KEY;
  //   } else {
  //     // throw new Error("Error getting pyq api key");
  //   }
  //   const myHeaders = new Headers();
  //   myHeaders.append("Authorization", pyq);
  //   myHeaders.append("Content-Type", "application/json");

  //   const raw = JSON.stringify({
  //     model: 152,
  //     version: 497,
  //     account: 162,
  //     input_sequence: `${description} colorful trending on artstation 4k hd sharp features`,
  //     negative_prompt:
  //       "grotesque, malformed, ugly, disfigured, text, human, person",
  //   });

  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   const requestOptions: RequestInit = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //     signal,
  //   };

  //   const timeoutId = setTimeout(() => {
  //     controller.abort();
  //   }, 15000);

  //   try {
  //     const response = await fetch(
  //       "https://partyimages.pyqai.com/",
  //       requestOptions
  //     );
  //     console.log(`response is: ${{ response }}`);
  //     const result = await response.text();
  //     console.log(`result is: ${result}`);
  //     res.status(200).json({ response: JSON.parse(result).response.response });
  //     console.log(JSON.parse(result).response.response);
  //   } catch (error: any) {
  //     if (error.name === "AbortError") {
  //       console.log("Request timed out");
  //       res.status(500).json({ message: "Request timed out" });
  //     } else {
  //       console.log("error", error);
  //       res.status(500).json({ message: "Internal server error" });
  //     }
  //   } finally {
  //     clearTimeout(timeoutId);
  //   }
}
