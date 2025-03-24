import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  const { id } = request.query;

  await dbConnect();

  if (request.method === "GET") {
    const product = await Product.findById(id);
    response.status(200).json(product);
    return;
  } else {
    response.status(405).json({ message: "Method not allowed" });
    return;
  }
}
