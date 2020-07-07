import tableaux from "../../data/tableaux";
import Link from "next/link";

export const tableaux = [
  {
    title: "La joconde",
    artist: "Da Vinci",
    slug: "la-joconde",
    year: 1532,
  },
  {
    title: "Carré blanc sur fond blanc",
    artist: "Mondrian",
    slug: "carre-blanc-sur-fond-blanc",
    year: 1955,
  },
];

export default function Index() {
  return (
    <div>
      {tableaux.map((e) => (
        <div
          style={{
            border: "solid 1px red",
            width: "50vw",
            height: "10vh",
            margin: "5%",
            background: "black",
          }}
        >
          <Link href={`/tableaux/${e.slug}`}>
            <a style={{ color: "white" }}>
              <div>{e.title}</div>
              <div>{e.year}</div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
