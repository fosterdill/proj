import { List, ListItem } from '@chakra-ui/react';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { useEffect, useState } from 'react';

import { users } from '@/schema';

const db = drizzle(sql);

export default async function Home() {
  const result = await db.select().from(users);
  return (
    <List>
      {result.map((user) => {
        return <ListItem key={user.id}>{user.firstName}</ListItem>;
      })}
    </List>
  );
}

export const revalidate = 60;
