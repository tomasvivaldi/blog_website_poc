import Link from "next/link";
import Image from "next/image";
import getPostMetadata from "./getPostMetadata";
import "@/styles/globals.css";
import React from "react";

function MainPoster() {
  const postMetadata = getPostMetadata();
  const latestPostimage = postMetadata.length > 0 ? postMetadata[0].image : "";
  const latestPostdescription =
    postMetadata.length > 0 ? postMetadata[0].description : "";
  const latestPosttitle = postMetadata.length > 0 ? postMetadata[0].title : "";
  const latestPostSlug = postMetadata.length > 0 ? postMetadata[0].slug : "";
  const latestPostsubtitle =
    postMetadata.length > 0 ? postMetadata[0].subtitle : "";
  const latestPostdate =
    postMetadata.length > 0
      ? new Date(postMetadata[0].date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "";
  return (
    <div className="flex-grow-0  flex-shrink-0 flex flex-wrap items-center md:flex-row my-16 xl:mx-16">
      <div className="group m-auto flex-grow-0 flex-shrink-0">
        <div className="relative block aspect-[5/4] flex-grow-0 flex-shrink-0 mx-auto pr-16">
          <Link
            className=" group flex-grow-0 flex-shrink-0"
            href={`/posts/${latestPostSlug}`}
          >
            <span className="flex-grow-0 flex-shrink-0 relative block box-border ">
              <Image
                className="flex-grow-0 flex-shrink-0  w-[400px] h-[500px] m-auto rounded-xl"
                src={latestPostimage}
                alt={latestPostdescription}
                width="500"
                height="500"
              />
            </span>
            <div className=" relative min-h-full">
              <div className="z-20 -top-12 text-white text-right absolute w-full">
                <h2 className="  border-x-inherit text-7xl ">
                  <span className=" before:block text-white before:inset-0 before:content:'' text-shadow">
                    {latestPosttitle}
                  </span>
                  {/* <span className="before:-z-10 before:absolute before:bg-blue-500 before:top-12 before:bottom-12  before:inset-0 before:content:'' ">
                      {latestPosttitle}
                    </span> */}
                </h2>
                <p className=" text-2xl">{latestPostsubtitle}</p>
                <p className=" text-cyan-800">{latestPostdate}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPoster;
