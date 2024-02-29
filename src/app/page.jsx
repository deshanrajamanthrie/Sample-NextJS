import Link from "next/link";

export default function Home() {
  return (
    <>

      <h1>Home Page</h1>
        <ul>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}></Link>Contact</li>
            <li><Link href={'/products'}>Prouducts</Link></li>
            <li><Link href={'/products/groceries'}>Grocery</Link></li>
            <li><Link href={'/products/vegies'}>Vegies</Link></li>
        </ul>
        <Link href={'https://nextjs.org/'}> Next Js Web</Link>
    </>
  );
}
