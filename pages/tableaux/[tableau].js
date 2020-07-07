import tableaux from "../../data/tableaux";

export default function Tableau({ tableau }) {
  const title = tableau?.title;
  return <h1>{title ?? "yolo"}</h1>;
}

export function getStaticProps({ params }) {
  const slug = params.tableau;
  const tableau = tableaux.filter((e) => e.slug === slug)[0] ?? [];

  return {
    props: { tableau },
  };
}

export function getStaticPaths() {
  const paths = tableaux.map((tableau) => {
    return {
      params: {
        tableau: tableau.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
}
