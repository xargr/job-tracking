import Link from "next/link";

function Index() {
  return (
    <>
      <div>Welcome to Next.js!</div>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </>
  );
}

export default Index;
