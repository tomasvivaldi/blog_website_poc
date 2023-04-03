import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewBlogList from "@/components/PreviewBlogList";
import BlogList from "@/components/BlogList";
import PreviewSuspense from "@/components/PreviewSuspense";
import MainPoster from "@/components/MainPoster";
import PostPreview from "@/components/PostPreview";

const query = groq`
*[_type=="post"] {
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)
`;
export const revalidate = 60;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
              Loading Preview Data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return (
    <>
      <div
        id="recent-posts"
        className=" after:bg-white after:block  after:border-b after:border-slate-400 after:inline-0 after:w-[80%] after:mx-auto"
      >
        <MainPoster />
        <PostPreview />

        <BlogList posts={[]} />
      </div>
    </>
  );
}
