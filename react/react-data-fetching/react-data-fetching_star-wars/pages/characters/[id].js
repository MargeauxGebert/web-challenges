import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const fetcher = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    // Attach extra info to the error object.
    error.info = await res.json()
    error.status = res.status
    throw error
  }
 
  return res.json()
}
export default function Character() {
  const router = useRouter();
  console.log(router);
  const id = router.query.id;

  const {data, isLoading, error} = useSWR(`https://swapi.py4e.com/api/people/${id}`, fetcher)

  if(isLoading) {
    return <h1> 🤩 Loading...</h1>
  }

  if (error) {
    return <h1> {error.status}</h1>
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
