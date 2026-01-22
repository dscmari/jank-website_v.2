import { PortableText, type SanityDocument } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "../../../src/sanity/client";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import InfoBtn from "@/app/components/buttons/InfoBtn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug },
    options,
  );

  if (!post) {
    return { title: "Post nicht gefunden" };
  }

  return {
    // Hier greifst du auf die Daten zu, die erst jetzt bekannt sind
    title: post.seoTitle,
  };
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options,
  );
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="px-4 md:px-8 lg:px-32">
      <Link
        href="/blog/"
        className="block mt-4 md:mt-8 lg:mt-16 font-light text-sm dark:text-custom-white"
      >
        ← Zurück
      </Link>
      <div className="flex flex-col items-center">
        {postImageUrl && (
          <Image
            src={postImageUrl}
            alt={post.title}
            width={600}
            height={400}
            className=" rounded-xl mt-16 "
          />
        )}
        <InfoBtn content="Blog" className="mt-4 md:mt-8 lg:mt-16 dark"/>
        <h1 className="mt-4 lg:mt-8">{post.title}</h1>
        <p className="text-sm font-light text-center">
          {new Date(post.publishedAt).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }) || "Datum unbekannt"}
        </p>

        <div className="mt-4 lg:mt-8 lg:px-16 xl:px-32">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
      </div>
    </main>
  );
}
