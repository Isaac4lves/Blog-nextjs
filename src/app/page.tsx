import Link from 'next/link';
import { query } from './lib/db';

export default async function Home() {
  const result = await query('SELECT * FROM posts');
  const posts = result.rows;

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      
      <ul className="space-y-2">
        {posts.map((post: any) => (
          <li key={post.id} className="p-2 border rounded">
            <Link href={`/postagem/${post.id}`} className="text-blue-500 hover:underline">
              {post.title} <br/>
              {post.description}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
