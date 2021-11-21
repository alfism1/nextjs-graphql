import React, { useEffect, useState } from "react";
import Link from "next/link";

import { getCategories } from "../services";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg p-8 mb-8">
      <div className="text-xl font-semibold border-b pb-6 mb-6">Category</div>
      {categories.map((category) => (
        <Link key={category.name} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
