import Post from './Post';
import type { Post as PostType } from '../types/Post';
import '../styles/PostList.css';

const posts: PostType[] = [
  {
    id: 1,
    title: 'Getting Started with TypeScript in React',
    author: 'Ange Umutoni',
    content:
      'TypeScript adds static typing to JavaScript, which helps catch bugs early and makes your React components far more predictable to work with over time.',
    datePosted: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Why Vite is Faster Than Create React App',
    author: 'Jean Baptiste',
    content:
      'Vite uses native ES modules and esbuild under the hood, giving you near-instant server start and hot module replacement compared to older bundler-based tools.',
    datePosted: '2026-09-10T09:00:00.000Z',
  },
  {
    id: 3,
    title: 'A Quick Guide to CSS Modules',
    author: 'Ange Umutoni',
    content:
      'CSS Modules scope your class names locally by default, which means you can reuse simple names like "container" or "title" without worrying about collisions.',
    datePosted: '2026-09-08T14:30:00.000Z',
  },
];

function PostList() {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;