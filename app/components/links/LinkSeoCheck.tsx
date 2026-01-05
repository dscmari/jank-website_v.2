import Link from "next/link";

type Props = {
  className?:string
}

export default function LinkSEOCheck({className}:Props) {
  return <Link href="/seo-berater/kostenloser-seo-check/" className={className}>Kostenloser SEO Check</Link>;
}
