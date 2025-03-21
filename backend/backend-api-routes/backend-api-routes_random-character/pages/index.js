import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);
  return await response.json();
}
export default function HomePage() {
  const {
    data: character,
    isLoading,
    error,
  } = useSWR("/api/random-character", fetcher);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>404: Not found</p>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <p>
        {character.prefix} {character.firstName} {character.lastName}
      </p>
      <p>Age: {character.age}</p>
      <p>Twitter: {character.twitter}</p>
      <p>Location: {character.location} (geohash)</p>
      <p>Favourite Color: {character.color}</p>
      <div style={{width: "100%", height: "50px", backgroundColor: `${character.color}`}}></div>
    </main>
  );
}
