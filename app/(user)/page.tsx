import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";

import MainPoster from "@/components/MainPoster";
import PostPreview from "@/components/PostPreview";
import SuspensePreview from "@/components/SuspensePreview";
import dynamic from "next/dynamic";
import { cache, Suspense } from "react";
import { usePreview } from "@/lib/sanity.preview";

// Enable NextJS to cache and dedupe queries
const clientFetch = cache(client.fetch.bind(client));

const query = groq`
*[_type=="post"] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;
export const revalidate = 60;

export default async function HomePage() {
  // if (previewData()) {
  //   // const posts = dynamic(() => usePreview(null, query), {
  //   //   ssr: false,
  //   // });
  //   // const previewPosts = usePreview(null, query);
  //   const posts = await client.fetch(query);
  //   return (
  //     <SuspensePreview
  //       fallback={
  //         <div role="status">
  //           <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
  //             Loading Preview Data
  //           </p>
  //         </div>
  //       }
  //     >
  //       <BlogList posts={posts} />
  //     </SuspensePreview>
  //   );
  // }

  const posts = await client.fetch(query);
  return (
    <>
      <div
        id="recent-posts"
        className=" after:bg-white after:block  after:border-b after:border-slate-400 after:inline-0 after:w-[80%] after:mx-auto"
      >
        <MainPoster />
        <PostPreview />

        <BlogList posts={posts} />
      </div>
    </>
  );
}
