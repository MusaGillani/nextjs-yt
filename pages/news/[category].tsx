import { GetServerSideProps } from "next";

type Article = {
  id: number;
  description: string;
  category: string;
  title: string;
};

export default function ArticleListByCategory({
  articles,
  category,
}: {
  articles: Article[];
  category: string;
}) {
  return (
    <>
      <h1>
        showing news for category <i>{category}</i>
      </h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} {article.title}
          </h2>
          <p> {article.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params, req, res: response, query } = context;
  console.log(req.headers.cookie);
  //   /news/sports?subcategory=football
  console.log(query);
  response.setHeader("Set-Cookie", ["name=Musa"]);
  const { category } = params!;
  // can filter data using query params on json server
  const res = await fetch(`http://localhost:4000/news?category=${category}`);

  const data = await res.json();
  console.log("Pre-rendering News Articles for category ", category);
  return {
    props: {
      articles: data,
      category,
    },
  };
};
