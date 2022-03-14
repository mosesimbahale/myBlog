import Link from 'next/link';
import HeaderTW from './HeaderTW';

export default function Header() {
  return (

    <>
    <HeaderTW />

    <h3 className="text-2xl md:text-3xl  tracking-tight md:tracking-tighter leading-tight mb-20 mt-2">
      <Link href="/">
        <a className=" font-sans hover:underline">HOME</a>
      </Link>
      .
    </h3>
    </>
  )
}








