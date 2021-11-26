import React from "react";
import Image from "next/image"

export default function getContentRaw(item, type) {
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

const getContentFragment = (content, index = null) => {
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

  if (content.type == "link") {
    return <a key={index} href={content.href} className={content.className} target={content.openInNewTab && "_blank"}>{getContentFragment(content.children[0])}</a>
  }

  if (content.type == "paragraph") {
    return content.children.map((c, i) => (
      <React.Fragment key={i}>{getContentFragment(c, i)}</React.Fragment>
    ));
  }

  if (index !== null)
    return <React.Fragment key={index}>{content.text}</React.Fragment>;
  else
    return <React.Fragment>{content.text}</React.Fragment>;
};