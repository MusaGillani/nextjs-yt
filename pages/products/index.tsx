import { GetStaticProps } from "next";
import Link from "next/link";

type Product = {
  price: number;
  id: number;
  title: string;
  body: string;
};

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <>
      <h1>List of Posts</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <h2>
              {product.id} {product.title}
            </h2>
          </Link>
          <hr />
        </div>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:4000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
