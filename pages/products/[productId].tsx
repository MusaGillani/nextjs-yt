import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type Product = {
  price: number;
  id: number;
  title: string;
  description: string;
};

export default function Product({ product }: { product: Product }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading ...</div>;
  }
  return (
    <>
      <h2>
        {product.id} {product.title} {product.price}
      </h2>
      <p>{product.description}</p>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:4000/products/${params!.productId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  console.log("Generating page for /products/", params!.productId);
  return {
    props: {
      product: data,
    },
  };
};
