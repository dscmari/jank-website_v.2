import Link from "next/link";

type Props = {
  className?:string
}

export default function LinkGEOKurs({className}:Props) {
  return <Link href="/geo-berater/kostenloser-geo-kurs/" className={className}>Kostenloser GEO Kurs</Link>
}