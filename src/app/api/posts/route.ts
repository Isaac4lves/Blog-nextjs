import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

export async function GET() {
  const result = await query('SELECT * FROM posts');
  return NextResponse.json(result.rows);
}