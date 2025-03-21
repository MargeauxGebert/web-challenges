import useSWR from "swr";
import { useRouter } from "next/router";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function ProductsDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, isLoading } = useSWR(`/api/products/${id}`, fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h2>{product.name}</h2>
      <p> {product.description} </p>
      <p>
        <small>
          {" "}
          {product.price} {product.currency}{" "}
        </small>{" "}
      </p>
      <button>{product.category}</button>
    </>
  );
}
