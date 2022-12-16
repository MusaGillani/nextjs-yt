import { GetStaticPaths, GetStaticProps } from "next";
import { comments } from "../../data/comments";

type Comment = {
  id: number;
  text: string;
};

export default function Comment({ comment }: { comment: Comment }) {
  return (
    <div>
      {comment.id} {comment.text}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          commentId: "1",
        },
      },
      {
        params: {
          commentId: "2",
        },
      },
      {
        params: {
          commentId: "3",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { commentId } = params!;

  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId as string)
  );

  /*
   Dont call the api we created to get the comment using comment id
   calling your api in these pre render functions is not recommended
   since the data is already present, we can replicate the logic here as we 
   defined in the api 
   calling our own api is just a unnecesary round trip which is not recommended 
   */
  return {
    props: {
      comment,
    },
  };
};
