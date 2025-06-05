import { query } from "@/app/lib/db";
import { type Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Postagem ${params.id}`,
  };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const result = await query("SELECT * FROM posts WHERE id = $1", [id]);
  const post = result.rows[0];

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <article className="prose">{post.content}</article>
    </main>
  );
}
