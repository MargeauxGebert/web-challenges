import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}

export default function Products() {
  const { data: products, isLoading } = useSWR("/api/products", fetcher);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h4>{product.name}</h4>
          <p> {product.description} </p>
          <p>
            <small>
              {" "}
              {product.price} {product.currency}{" "}
            </small>{" "}
          </p>
          <button>{product.category}</button>
        </li>
      ))}
    </ul>
  );
}
