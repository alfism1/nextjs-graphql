import React from "react";
// import { Container, CategoryBox } from "../";
import { Container } from "components/templates";
import { AddThis, CategoryBox } from "components/atoms";
import getContentRaw from "utils/BodyParser";
import moment from "moment";
import Image from "next/image";

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
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-9">
            <div className="flex flex-row gap-2 justify-start">
              <div className="pt-6">
                <div className="sticky top-20 text-xs">
                  <div className="w-10">
                    <AddThis slug={slug} title={title} />
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
          </div>
          <div className="col-span-12 md:col-span-3 pt-6">Sidebar is comming soon</div>
        </div>

        <span className="font-semibold block text-sm">Source(s):</span>
        {source.map((s, i) => (
          <a key={i} className="dy kr text-sm" href={s}>
            {s}
          </a>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default ArticleDetail;