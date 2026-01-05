import Link from "next/link";

type Props = {
  className?:string
}

export default function LinkGeoCheck({className}:Props) {
  return <Link href="/geo-berater/kostenloser-geo-check/" className={className}>Kostenloser GEO Check</Link>;
}
