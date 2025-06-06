import Link from 'next/link';
import { query } from './lib/db';

export default async function Home() {
  const result = await query(`
    SELECT id, title, description, image, writer,
           TO_CHAR(created_at, 'DD/MM/YYYY') AS created_at
    FROM posts
  `);
  const posts = result.rows;

  return (
    <main className="w-full max-w-6xl p-4 md:p-6 mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Postagens</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <li key={post.id} className="border rounded overflow-hidden shadow hover:shadow-lg transition">
            <Link href={`/postagem/${post.id}`}>
              <div className="w-full aspect-[3/2] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2> 
                <p className="text-l line-clamp-3"> {post.description} </p>
                <p className='text-center text-gray-600 m-2'> {post.created_at}  </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}