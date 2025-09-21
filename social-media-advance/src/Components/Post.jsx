import { MdDelete } from "react-icons/md";
import { VscReactions } from "react-icons/vsc";
import { PostList2 } from "../Store/post-list-store";
import { useContext } from "react";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList2);
  return (
    <div className="post">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
          <p className="card-text ">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary hashtags" key={tag}>
              {tag}
            </span>
          ))}
          <div className="alert alert-dark reaction" role="alert">
            {post.reactions}
            <VscReactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
