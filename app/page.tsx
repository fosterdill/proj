'use client';
import { List, ListItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { User } from '@/schema';

export default function Home() {
  const [users, setUsers] = useState<{ result: User[] }>({ result: [] });

  useEffect(() => {
    (async () => {
      const res = await fetch(`/api/users`);
      const users: { result: User[] } = await res.json();

      setUsers(users);
    })();
  }, []);

  return (
    <List>
      {users.result.map((user: User) => {
        return <ListItem key={user.id}>{user.firstName}</ListItem>;
      })}
    </List>
  );
}
