import { PostList2 } from "../Store/post-list-store";
import { useContext } from "react";
import Post from "./Post";

const PostList = () => {
  const { postList } = useContext(PostList2);
  return (
    <div>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
