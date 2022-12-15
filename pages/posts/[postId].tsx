import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Post({ post }: { post: Post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>...is loading</h1>;
  }
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
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await res.json();

  // const paths = data.map((post: { id: string }) => {
  //   return {
  //     params: {
  //       postId: `${post.id}`,
  //     },
  //   };
  // });
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    // paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params!.postId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log("Generating page for /posts/", params!.postId);
  return {
    props: {
      post: data,
    },
  };
};
