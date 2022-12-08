import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  function handleClick() {
    router.push("/product");
    // router.replace("/blog");
  }
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Navigate</button>
    </div>
  );
}
