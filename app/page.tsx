import { List, ListItem } from '@chakra-ui/react';

import baseUrl from '@/baseUrl';
import { User } from '@/schema';

export default async function Home() {
  const res = await fetch(`${baseUrl}/api/users`);
  const users = (await res.json()).result;

  return (
    <List>
      {users.map((user: User) => {
        return <ListItem key={user.id}>{user.firstName}</ListItem>;
      })}
    </List>
  );
}
