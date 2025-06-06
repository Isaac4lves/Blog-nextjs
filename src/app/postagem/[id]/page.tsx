import { query } from "@/app/lib/db";
import '../../globals.css';
import { type Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const result = await query("SELECT * FROM posts WHERE id = $1", [id]);
  const post = result.rows[0];

  if (!post) {
    return {
      title: "Postagem não encontrada",
    };
  }

  return {
    title: `${post.title}`,
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const result = await query("SELECT * FROM posts WHERE id = $1", [id]);
  const post = result.rows[0];

  if (!post) {
    return <div className="text-center text-gray-400 py-10">Post não encontrado</div>;
  }

  return (
    <main className="w-full max-w-6xl px-4 py-10 mx-auto text-gray-300"> {/* texto claro */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold leading-tight mb-2">
          {post.title}
        </h1>
        <p className="text-zinc-300 text-lg italic mb-1">{post.description}</p>
        <div className="flex items-center gap-3 text-zinc-400 text-base md:text-lg mt-4">
          <img
            src="https://avatars.githubusercontent.com/u/147288252?v=4"
            alt="Avatar"
            className="w-12 h-12 rounded-full object-cover border-2"
            style={{ borderColor: "#ff9700" }}
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-zinc-200">{post.writer}</span>
            <span className="text-sm md:text-base text-zinc-400">
              {new Date(post.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>

        <hr className="border-t border-zinc-600 mt-6 mb-6" />
      </header>

      {post.image && (
        <div className="mb-8 overflow-hidden rounded-lg shadow">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto object-cover"
          />
        </div>
      )}
      <article id="artigo"
        className=" flex flex-col gp-4 prose prose-2xl max-w-full prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

    </main>
  );
}
