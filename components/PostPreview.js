import Link from "next/link";
import Image from "next/image";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props) => {
  return (
    <div
      className=" self-center mx:auto md:max-w-[380px] max-h-[150px] p-4 rounded-md 
    shadow-md bg-gradient-to-r from-cyan-800/30 to-blue-800/30  my-6 "
    >
      <Link href={`/posts/${props.slug}`}>
        <h2
          className=" text-lg font-bold text-sky-400
         hover:underline underline-offset-1 decoration-black"
        >
          {props.title}
        </h2>
      </Link>
      <p className=" text-gray-200">{props.subtitle}</p>
      <p className=" text-cyan-800">{props.date}</p>
    </div>
  );
};

export default PostPreview;
