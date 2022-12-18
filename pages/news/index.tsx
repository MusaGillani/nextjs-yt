import { GetStaticProps } from "next";

export default function News({ data }: { data: string }) {
  return <h1 className="content">{data}</h1>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { preview, previewData } = context;
  console.log("Running getStaticProps", previewData);
  return {
    props: {
      data: preview ? "List of draft articles" : "List of published articles",
    },
  };
};
