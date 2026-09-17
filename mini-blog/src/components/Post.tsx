import { memo } from 'react';
import type { Post as PostType } from '../types/Post';
import styles from '../styles/Post.module.css';

interface PostProps {
  post: PostType;
}

function Post({ post }: PostProps) {
  const preview = post.content.split(' ').slice(0, 10).join(' ') + '...';

  const isNew =
    new Date().getTime() - new Date(post.datePosted).getTime() < 24 * 60 * 60 * 1000;

  const isHighlighted = post.author === 'Ange Umutoni';

  return (
    <div className={`${styles.post} ${isHighlighted ? styles.highlightAuthor : ''}`}>
      <h3>{post.title}</h3>
      <p className={styles.postAuthor}>By {post.author}</p>
      <p className={styles.postPreview}>{preview}</p>
      <p className={styles.postDate}>{post.datePosted}</p>
      {isNew && <span className={styles.badgeNew}>New!</span>}
    </div>
  );
}

export default memo(Post);