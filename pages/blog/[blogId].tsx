import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

export default function Blog({ title, description }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: true,
  };
};
