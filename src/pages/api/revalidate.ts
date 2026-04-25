import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 1. Verifikasi Keamanan Token
  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({
      revalidated: false,
      message: "Insert correct token",
    });
  }

  // 2. Verifikasi Parameter Objek
  if (req.query.data === "produk") {
    try {
      // 3. Eksekusi Paksa Pembaruan Cache (On-Demand ISR)
      await res.revalidate("/produk/static");
      return res.status(200).json({ revalidated: true });
    } catch (error) {
      console.error("Error in API route:", error);
      return res.status(500).json({ revalidated: false });
    }
  }

  return res.status(400).json({
    revalidated: false,
    message: "Invalid query parameter. Expected 'data=produk'.",
  });
}
