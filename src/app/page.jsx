import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit error aliquid sint iste quos omnis molestiae ipsum, quod ut ullam!</p>
        <ul>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}></Link>Contact</li>
            <li><Link href={'/products'}>Prouducts</Link></li>
            <li><Link href={'/products/groceries'}>Grocery</Link></li>
            <li><Link href={'/products/vegies'}>Vegies</Link></li>
            <li><Link href={'/component'}>Component</Link></li>
          
        </ul>
        {/* <Link href={'https://nextjs.org/'}> Next Js Web</Link> */}
    </>
  );
}
