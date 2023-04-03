import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../../components/getPostMetadata";

import Footer from "../../../../components/footer";
import Header from "../../../../components/header";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PagePost = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <section>
        <Header />
      </section>

      <div className="m-auto w-full rounded-3xl bg-gradient-to-r from-violet-500/0 to-fuchsia-500/50">
        <h1 className=" hidden">{post.data.title}</h1>
        <article className="m-auto prose text-slate-300 prose-h1:text-white prose-headings:text-slate-100  lg:prose-xl">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
      {/* <section>
        <Footer />
      </section> */}
    </>
  );
};

export default PagePost;
