import React, { useEffect, useState } from "react";

import { getCategories } from "../services";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h3 className="text-xl font-semibold border-b pb-6 mb-6">Category</h3>
      {categories.map((category) => (
        <span key={category.name} className="cursor-pointer block pb-3 mb-3">{category.name}</span>
      ))}
    </div>
  );
}

export default Categories;
