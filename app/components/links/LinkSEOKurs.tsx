import Link from "next/link";

type Props = {
  className?:string
}

export default function LinkSEOKurs({className}:Props) {
  return <Link href="/seo-berater/kostenloser-seo-kurs/" className={className}>Kostenloser SEO Kurs</Link>
}