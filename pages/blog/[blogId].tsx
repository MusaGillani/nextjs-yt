import { GetServerSideProps } from "next";
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: "Article Title",
      description: "Article description",
    },
  };
};
