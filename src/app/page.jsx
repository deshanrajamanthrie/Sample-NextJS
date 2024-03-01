'use client'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";

export default function Home() {

  const [text, setText] = useState();

  const handleAlert = () => {
    alert(text);
  }




  return (
    <>


      <section className="mainPage">
        <div className="d-flex flex-row" style={{ width: '500px' }}>
          <input onChange={e => setText(e.target.value)} class="form-control form-control-md mx-2" type="text" placeholder="Type Here" aria-label=".form-control-lg example" />
          <button onClick={handleAlert} className="btn btn-primary w-25 ">Click</button>
        </div>
        <div className="d-flex mt-3 flex-row align-items-start ">

          <h4>Value Is : Hello</h4>

        </div>
























      </section>
      {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit error aliquid sint iste quos omnis molestiae ipsum, quod ut ullam!</p>
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
