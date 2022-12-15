import { GetServerSideProps } from "next";

type Article = {
  id: number;
  description: string;
  category: string;
  title: string;
};

export default function NewsArticleList({ articles }: { articles: Article[] }) {
  return (
    <>
      <h1>List of news articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title} | {article.category}
          </h2>
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/news");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
};
