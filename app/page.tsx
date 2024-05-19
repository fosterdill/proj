import { List, ListItem } from '@chakra-ui/react';

import baseUrl from '@/baseUrl';
import { User } from '@/schema';

export default async function Home() {
  // const res = await fetch(`${baseUrl}/api/users`);
  // const users = (await res.json()).result;

  console.log(process.env.VERCEL_URL);
  return (
    <List>
      {process.env.VERCEL_URL}

      {/* {users.map((user: User) => {
        return <ListItem key={user.id}>{user.firstName}</ListItem>;
      })} */}
    </List>
  );
}
