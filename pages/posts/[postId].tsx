import { GetStaticPaths, GetStaticProps } from "next";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Post({ post }: { post: Post }) {
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params!.postId}`
  );
  const data = await res.json();
  return {
    props: {
      post: data,
    },
  };
};
