import type { Post as PostType } from '../types/Post';
import '../styles/Post.module.css';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const preview = post.content.split(' ').slice(0, 10).join(' ') + '...';

  const isNew =
    new Date().getTime() - new Date(post.datePosted).getTime() < 24 * 60 * 60 * 1000;

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p className="post-author">By {post.author}</p>
      <p className="post-preview">{preview}</p>
      <p className="post-date">{post.datePosted}</p>
      {isNew && <span className="badge-new">New!</span>}
    </div>
  );
}

export default Post;