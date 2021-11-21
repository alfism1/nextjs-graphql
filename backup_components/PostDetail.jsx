import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

function PostDetail({ post }) {
  const getContentRaw = (item, type) => {
    let result = "";

    // paragraph
    if (type == "paragraph") {
      result = (
        <p className="mb-6">
          {item.children.map((content, index) => (
            <React.Fragment key={index}>
              {getContentFragment(content, index)}
            </React.Fragment>
          ))}
        </p>
      );
    }
    // heading-one
    if (type == "heading-one") {
      result = (
        <h1 className="my-4 text-2xl font-bold block">
          {item.children.map((content, index) => (
            <React.Fragment key={index}>
              {getContentFragment(content, index)}
            </React.Fragment>
          ))}
        </h1>
      );
    }
    // heading-two
    if (type == "heading-two") {
      result = (
        <h2 className="my-4 text-xl font-bold block">
          {item.children.map((content, index) => (
            <React.Fragment key={index}>
              {getContentFragment(content, index)}
            </React.Fragment>
          ))}
        </h2>
      );
    }
    // heading-three
    if (type == "heading-three") {
      result = (
        <h3 className="my-4 text-l font-bold block">
          {item.children.map((content, index) => (
            <React.Fragment key={index}>
              {getContentFragment(content, index)}
            </React.Fragment>
          ))}
        </h3>
      );
    }
    // image
    if (type == "image") {
      result = (
        <div className="mb-8">
          <Image
            src={item.src}
            width={item.width}
            height={item.height}
            layout="intrinsic"
            alt={post.title}
            className="w-full border hidden"
          />
        </div>
      );
    }
    // block-quote
    if (type == "block-quote") {
      result = (
        <blockquote className="p-4 italic border-l-4 bg-gray-50 mb-8">
          {item.children.map((content, index) => {
            return (
              <React.Fragment key={index}>
                {getContentFragment(content, index)}
              </React.Fragment>
            );
          })}
        </blockquote>
      );
    }

    // numbered-list
    if (type == "numbered-list") {
      result = (
        <ol className="list-decimal list-inside mb-8">{getListItem(item)}</ol>
      );
    }
    // bulleted-list
    if (type == "bulleted-list") {
      result = (
        <ul className="list-disc list-inside mb-8">{getListItem(item)}</ul>
      );
    }

    return result;
  };

  const getListItem = (item) => {
    return item.children.map((c, i) => {
      if (c.type == "list-item") {
        return (
          <React.Fragment key={i}>
            {c.children.map((list, j) => {
              if (list.type == "list-item-child") {
                return (
                  <li key={j}>
                    {list.children.map((content, index) => (
                      <React.Fragment key={index}>
                        {getContentFragment(content, index)}
                      </React.Fragment>
                    ))}
                  </li>
                );
              }
            })}
          </React.Fragment>
        );
      }
    });
  };

  const getContentFragment = (content, index) => {
    if (content.bold) {
      return <b key={index}>{content.text}</b>;
    }
    if (content.italic) {
      return <i key={index}>{content.text}</i>;
    }
    if (content.underline) {
      return <u key={index}>{content.text}</u>;
    }
    if (content.code) {
      return <code className="block">{content.text}</code>;
    }

    if (content.type == "paragraph") {
      return content.children.map((c, i) => (
        <React.Fragment key={i}>{getContentFragment(c, i)}</React.Fragment>
      ));
    }

    return <React.Fragment key={index}>{content.text}</React.Fragment>;
  };

  return (
    <div className="bg-white lg:p-8 mb-8">
      <div className="lg:px-8 lg:pt-8">
        <Image
          className=""
          src={post.coverImage.url}
          width={post.coverImage.width}
          height={post.coverImage.height}
          layout="responsive"
          alt={post.title}
        />
      </div>
      <div className="px-8 py-4">
        <div className="sm:flex sm:flex-row sm:justify-between text-center mb-8 border-b-2 pb-4">
          <div className="flex items-center justify-center mb-3 sm:mb-0">
            <Image
              className="rounded-full"
              src={post.author.picture.url}
              width={30}
              height={30}
              layout="intrinsic"
              alt={post.author.biography}
            />
            <span className="ml-2">{post.author.name}</span>
          </div>
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline mr-2 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <Link href={`/category/${post.category.slug}`}>
          <span className="cursor-pointer font-bold text-red-600">
            {post.category.name}
          </span>
        </Link>
        <h1 className="text-3xl font-bold mt-4 mb-8">{post.title}</h1>
        <section>
          {post.content.raw.children.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {getContentRaw(item, item.type, index)}
              </React.Fragment>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default PostDetail;
