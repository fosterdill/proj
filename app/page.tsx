import { Button } from '@chakra-ui/react';

export default async function Home() {
  const res = await fetch('https://dummyjson.com/test');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
}
