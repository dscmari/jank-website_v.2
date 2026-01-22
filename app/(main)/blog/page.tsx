import { LuSquareArrowOutUpRight } from "react-icons/lu";
import SEOCheckBtn from "@/app/components/buttons/SEOCheckBtn";
import Breadcrumbs from "@/app/components/Breadcrumps";
import { client } from "../../../src/sanity/client";
import { type SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos, Podcast, Ratgeber rund um SEO, GEO & Ads",
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id, 
  title, 
  slug, 
  publishedAt,
  body,
  "imageUrl": image.asset->url,
  "excerpt": array::join(body[0].children[].text, "")
}`;
const options = { next: { revalidate: 30 } };

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="">
      <Breadcrumbs className="hidden md:block pt-4 px-4 lg:px-32 font-semibold" />
      <div className="mt-12 mx-4 md:mx-0 lg:flex md:px-16 lg:px-32 lg:pt-32">
        <h1 className="mb-4 lg:mb-0 flex-2 lg:!text-3xl/10 tracking-wide">
          Jansen's Blog (Blog Name)
        </h1>
        <p className="flex-1 lg:max-w-96 lg:mr-12">
          In unserem Blog findest Du aktuelle Ratgeber, Podcast-Folgen und
          Erklärvideos rund um SEO, GEO und Google Ads.
        </p>
      </div>
      <div className="mx-4 md:mx-16 mt-8 lg:mt-16 lg:mx-32 md:max-w-1/2">
        <SEOCheckBtn className="" />
      </div>
      <div className="grid lg:grid-cols-2 gap-24 lg:gap-12 m-8 mt-24 lg:m-32">
        {posts.map((post) => (
          <div key={post._id} className="bg-custom-white dark rounded-xl">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={800}
              className=""
            />
            <div className="mx-4 my-2 flex flex-col items-start">
              <Link
                href={`/${post.slug.current}`}
                className="gap-2 pt-4  underline font-semibold text-lg"
                target="_blank"
              >
                {post.title}
              </Link>
              <p className="leading-5 text-slate-600">
                {post.excerpt?.substring(0, 140)}...
              </p>
              <Link
                href={`/${post.slug.current}`}
                className="flex gap-2 pt-4 items-center text-sm font-semibold"
                target="_blank"
              >
                Zum Post
                <LuSquareArrowOutUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
