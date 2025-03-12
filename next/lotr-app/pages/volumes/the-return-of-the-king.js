import Link from "next/link";
import { volumes } from "../lib/data";
import Image from "next/image";
const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");
export default function DetailPage2() {
  return (
    <>
      <Link href="/volumes">All Volumes</Link>
      <h1 style={{ color: volume.color }}>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>
            <h3>{book.ordinal}</h3>
            <p> {book.title} </p>
          </li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt={volume.title}
        width="140"
        height="230"
      ></Image>
      <br /> <Link href="/volumes/the-two-towers">previous Volume</Link>
      <br /> <Link href="/volumes">All Volumes</Link>
    </>
  );
}
