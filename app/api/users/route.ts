import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { NextResponse } from 'next/server';

import { users } from '@/schema';

export async function GET() {
  try {
    const db = drizzle(sql);
    const result = await db.select().from(users);

    return NextResponse.json({ result }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: JSON.stringify(e) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const db = drizzle(sql);
    const body = await request.json();
    const result = await db.insert(users).values({ firstName: body.first_name, lastName: body.last_name });

    return NextResponse.json({ result }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: JSON.stringify(e) }, { status: 500 });
  }
}
