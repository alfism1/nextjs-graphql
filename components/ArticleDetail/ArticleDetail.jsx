import React from "react";
import { Container, CategoryBox } from "../";
import getContentRaw from "../Utils/BodyParser";
import moment from "moment";
import Image from "next/image";
import Script from "next/script";

function ArticleDetail({ post }) {
  const {
    title,
    slug,
    createdAt,
    category,
    author,
    coverImage,
    source,
    content,
  } = post;

  const handleAddthis = () => {
    window?.addthis.init();
  };

  return (
    <React.Fragment>
      <div className="bg-gray-100 py-5">
        <Container>
          <div>
            <CategoryBox
              category={category.name}
              categoryColor={category?.boxColor?.hex}
            />
            <span className="text-sm ml-3">
              {moment(createdAt).format("MMM DD, YYYY")}
            </span>
            <h1 className="font-bold text-2xl mt-2">{title}</h1>
          </div>
          <div className="flex flex-row items-center justify-start mt-6">
            <Image
              className="rounded-full"
              src={author.picture.url}
              width={`30px`}
              height={`30px`}
              layout="intrinsic"
            />
            <div className="ml-3 text-sm font-bold">{author.name}</div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex flex-row gap-2 justify-start">
          <div className="pt-6">
            <div className="sticky top-20 text-xs">
              <div className="w-10">
                <div
                  data-addthis-url={`/post/${slug}`}
                  data-addthis-title={title}
                >
                  <div>
                    <div className="addthis_toolbox addthis_default_style addthis_32x32_style">
                      <a className="addthis_button_whatsapp"></a>
                      <a className="addthis_button_facebook"></a>
                      <a className="addthis_button_twitter"></a>
                      <a className="addthis_button_linkedin"></a>
                      <a className="addthis_button_compact"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 text-sm leading-6">
            <div className="mb-8  shadow-lg">
              <Image
                priority
                className="object-cover"
                src={coverImage.url}
                width={300}
                height={150}
                layout="responsive"
              />
            </div>
            {content.raw.children.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {getContentRaw(item, item.type)}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        <span className="font-semibold block text-xs">Source(s):</span>
        {source.map((s, i) => (
          <a key={i} className="dy kr text-xs" href={s}>{s}</a>
        ))}
      </Container>

      <Script
        type="text/javascript"
        src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-617df1b6c0b1a19d"
        onLoad={handleAddthis}
      ></Script>
    </React.Fragment>
  );
}

export default ArticleDetail;
