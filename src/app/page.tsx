import Link from 'next/link';
import { query } from './lib/db';

export default async function Home() {
  const result = await query(`
    SELECT id, title, description, image, writer,
           TO_CHAR(created_at, 'DD/MM/YYYY') AS created_at
    FROM posts
  `);
  const posts = result.rows;

  const resulttwo = await query(`
    SELECT id, title, description, image, img_maincolor FROM posts ORDER BY created_at DESC LIMIT 1
  `);
  const [recent] = resulttwo.rows;

  return (
    <main className="w-full max-w-6xl p-4 md:p-6 mx-auto">

      <Link href={`/postagem/${recent.id}`}>
        <div
          className="flex flex-col md:flex-row items-center md:items-stretch bg-cover 
          bg-no-repeat rounded-lg overflow-hidden mb-8 cursor-pointer" id='banner-destaque'
          style={{ backgroundColor: recent.img_maincolor }}
        >
          <div className="w-full md:w-1/2">
            <img
              src={recent.image}
              alt={recent.title}
              className="w-full h-auto object-contain md:h-full"
            />
          </div>

          <div className="flex-1 p-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-wide mb-2 text-white">{recent.title}</h1>
            <p className="text-base">{recent.description}</p>
          </div>
        </div>
      </Link>

      <hr className="border-t border-zinc-600 mt-6 mb-6" />

      <h1 className="text-2xl font-bold mb-10 text-center">Postagens</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <li key={post.id} className="rounded overflow-hidden shadow hover:shadow-xl transition">
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