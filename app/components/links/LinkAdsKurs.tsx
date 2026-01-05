import Link from "next/link";

type Props = {
  className?:string
}

export default function LinkAdsKurs({className}:Props) {
  return <Link href="/google-ads-berater/kostenloser-google-ads-kurs/" className={className}>Kostenloser Google Ads Kurs</Link>
}