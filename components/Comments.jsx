import React, { useEffect, useState } from "react";
import { getComments } from "../services";
import moment from 'moment'

function Comments({ slug }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-0 md:mb-8">
      <div className="text-xl font-semibold border-b pb-6 mb-6">
        {comments.length} Comment(s)
      </div>

      {comments.length > 0 ? (
        comments.map((c) => (
          <React.Fragment key={c.node.createdAt}>
            <div className="mb-8 pb-6 border-b">
              <p className="text-sm font-semibold">{c.node.name}</p>
              <span className="text-sm italic">{c.node.email}</span>{" "}
              <span className="text-xs">on</span>{" "}
              <span className="text-sm">{moment(c.node.createdAt).format("MMM DD, YYYY")}</span>
              <p className="text-gray-500 mt-4">{c.node.comment}</p>
            </div>
          </React.Fragment>
        ))
      ) : (
        <p className="text-gray-500 mt-4">No comments</p>
      )}
    </div>
  );
}

export default Comments;

<div className="mb-8 pb-6 border-b">
  <span className="text-sm font-semibold">Author</span>{" "}
  <span className="text-xs">on</span>{" "}
  <span className="text-sm">12 Oct, 2021</span>
  <p className="text-gray-500 mt-4">This is the commetns</p>
</div>;
