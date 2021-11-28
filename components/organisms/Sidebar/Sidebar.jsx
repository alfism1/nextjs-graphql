import React, { useEffect, useState } from "react";
import {
  PostsWidgetV1,
  PostsWidgetV2,
} from "../../molecules/index";
import { getRecentPosts } from "../../../services/index";

function Sidebar() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <div>
      <div>
        <PostsWidgetV1 title="Read also" posts={posts} />
      </div>
      <div className="mt-8 pt-8 border-t">
        <PostsWidgetV2 title="Other posts" posts={posts} />
      </div>
    </div>
  );
}

export default Sidebar;
