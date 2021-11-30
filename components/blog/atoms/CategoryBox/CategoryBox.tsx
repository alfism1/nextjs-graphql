import React from "react";
import Link from "next/link";

type Props = {
  categorySlug?: string,
  categoryColor?: string,
  category: string
}

function CategoryBox({ categorySlug, categoryColor, category }: Props) {
  categoryColor = categoryColor ? categoryColor : "rgb(217, 119, 6, 1)";
  return (
    <>
      {categorySlug ? (
        <Link href={categorySlug}>
          <span
            style={{ backgroundColor: categoryColor }}
            className="uppercase cursor-pointer px-2 py-1 text-xs text-white mr-2"
          >
            {category}
          </span>
        </Link>
      ) : (
        <span
          style={{ backgroundColor: categoryColor }}
          className="uppercase px-2 py-1 text-xs text-white mr-2"
        >
          {category}
        </span>
      )}
    </>
  );
}

export default CategoryBox;
